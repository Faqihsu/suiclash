/// Battle Arena - 1v1 card battles
module suiclash::clash_arena {
    use sui::object::{Self};
    use sui::transfer;
    use sui::tx_context;
    use sui::balance::{Self, Balance};
    use sui::coin::{Self, Coin};
    use sui::event;
    use std::option::{Self};

    use suiclash::clash_token::CLASH_TOKEN;
    use suiclash::clash_card::{Self, Card};

    // ===== CONSTANTS =====
    const ENTRY_FEE: u64 = 5_000_000_000;   // 5 $CLASH
    const WINNER_REWARD: u64 = 15_000_000_000;  // 15 $CLASH

    // ===== ERRORS =====
    const EInsufficientFee: u64 = 1;
    const EBattleAlreadyResolved: u64 = 2;
    const ENotPlayerB: u64 = 3;

    // ===== EVENTS =====
    public struct BattleCreatedEvent has copy, drop {
        battle_id: address,
        player_a: address,
        card_a_id: address,
    }

    public struct BattleJoinedEvent has copy, drop {
        battle_id: address,
        player_b: address,
        card_b_id: address,
    }

    public struct BattleResolvedEvent has copy, drop {
        battle_id: address,
        winner: address,
        loser: address,
        damage_winner: u16,
        damage_loser: u16,
    }

    // ===== STRUCT =====
    public struct Battle has key {
        id: object::UID,
        player_a: address,
        card_a_id: object::ID,
        player_b: std::option::Option<address>,
        card_b_id: std::option::Option<object::ID>,
        winner: std::option::Option<address>,
        damage_a: u16,
        damage_b: u16,
        reward_pool: Balance<CLASH_TOKEN>,
    }

    // ===== PUBLIC FUNCTIONS =====

    /// Create new battle (Player A)
    public entry fun create_battle(
        card: &Card,
        entry_fee: &mut Coin<CLASH_TOKEN>,
        ctx: &mut tx_context::TxContext,
    ) {
        assert!(coin::value(entry_fee) >= ENTRY_FEE, EInsufficientFee);

        let sender = tx_context::sender(ctx);
        let card_id = object::id(card);

        // Split and convert fee to balance
        let fee_coin = coin::split(entry_fee, ENTRY_FEE, ctx);
        let fee_balance = coin::into_balance(fee_coin);

        let battle = Battle {
            id: object::new(ctx),
            player_a: sender,
            card_a_id: card_id,
            player_b: std::option::none(),
            card_b_id: std::option::none(),
            winner: std::option::none(),
            damage_a: 0,
            damage_b: 0,
            reward_pool: fee_balance,
        };

        let battle_id = object::id(&battle).to_address();

        event::emit(BattleCreatedEvent {
            battle_id,
            player_a: sender,
            card_a_id: object::id(card).to_address(),
        });

        transfer::share_object(battle);
    }

    /// Join battle as Player B
    public entry fun join_battle(
        battle: &mut Battle,
        card: &Card,
        entry_fee: &mut Coin<CLASH_TOKEN>,
        ctx: &mut tx_context::TxContext,
    ) {
        assert!(std::option::is_none(&battle.player_b), 0);
        assert!(coin::value(entry_fee) >= ENTRY_FEE, EInsufficientFee);

        let sender = tx_context::sender(ctx);

        let fee_coin = coin::split(entry_fee, ENTRY_FEE, ctx);
        let fee_balance = coin::into_balance(fee_coin);

        battle.player_b = std::option::some(sender);
        battle.card_b_id = std::option::some(object::id(card));

        balance::join(&mut battle.reward_pool, fee_balance);

        event::emit(BattleJoinedEvent {
            battle_id: object::id(battle).to_address(),
            player_b: sender,
            card_b_id: object::id(card).to_address(),
        });
    }

    /// Resolve battle
    public entry fun resolve_battle(
        battle: &mut Battle,
        card_a: &Card,
        card_b: &Card,
        ctx: &mut tx_context::TxContext,
    ) {
        assert!(std::option::is_none(&battle.winner), EBattleAlreadyResolved);
        assert!(std::option::is_some(&battle.player_b), 0);

        let (atk_a, def_a, elem_a, _, _) = clash_card::get_card_stats(card_a);
        let (atk_b, def_b, elem_b, _, _) = clash_card::get_card_stats(card_b);

        let mult_a = clash_card::get_element_multiplier(elem_a, elem_b);
        let mult_b = clash_card::get_element_multiplier(elem_b, elem_a);

        let dmg_a_raw = ((atk_a as u64) * (mult_a as u64)) / 100;
        let dmg_b_raw = ((atk_b as u64) * (mult_b as u64)) / 100;

        let damage_a: u16 = if (dmg_a_raw > (def_b as u64)) {
            ((dmg_a_raw - (def_b as u64)) as u16)
        } else {
            1
        };

        let damage_b: u16 = if (dmg_b_raw > (def_a as u64)) {
            ((dmg_b_raw - (def_a as u64)) as u16)
        } else {
            1
        };

        battle.damage_a = damage_a;
        battle.damage_b = damage_b;

        let winner = if (damage_a > damage_b) {
            std::option::some(battle.player_a)
        } else if (damage_b > damage_a) {
            std::option::some(*std::option::borrow(&battle.player_b))
        } else {
            std::option::none()
        };

        if (std::option::is_some(&winner)) {
            let winner_addr = *std::option::borrow(&winner);
            let loser_addr = if (winner_addr == battle.player_a) {
                *std::option::borrow(&battle.player_b)
            } else {
                battle.player_a
            };

            let reward = coin::take(&mut battle.reward_pool, WINNER_REWARD, ctx);
            transfer::public_transfer(reward, winner_addr);

            event::emit(BattleResolvedEvent {
                battle_id: object::id(battle).to_address(),
                winner: winner_addr,
                loser: loser_addr,
                damage_winner: if (damage_a > damage_b) { damage_a } else { damage_b },
                damage_loser: if (damage_a > damage_b) { damage_b } else { damage_a },
            });
        };

        battle.winner = winner;
    }

    /// Get battle status
    public fun get_battle_info(battle: &Battle): (address, std::option::Option<address>, std::option::Option<address>) {
        (battle.player_a, battle.player_b, battle.winner)
    }
}
