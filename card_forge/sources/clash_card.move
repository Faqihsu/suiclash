/// Card NFT - SuiClash collectible cards
module suiclash::clash_card {
    use sui::object::{Self};
    use sui::transfer;
    use sui::tx_context;
    use sui::event;
    use std::string::String;

    // ===== CONSTANTS =====
    const ELEMENT_NEUTRAL: u8 = 0;
    const ELEMENT_FIRE: u8 = 1;
    const ELEMENT_WATER: u8 = 2;
    const ELEMENT_EARTH: u8 = 3;

    const RARITY_COMMON: u8 = 1;
    const RARITY_RARE: u8 = 2;
    const RARITY_EPIC: u8 = 3;

    // ===== ERRORS =====
    const EInvalidAttack: u64 = 1;
    const EInvalidDefense: u64 = 2;
    const EInvalidElement: u64 = 3;
    const EInvalidRarity: u64 = 4;
    const EMaxLevelReached: u64 = 5;
    const ENotOwner: u64 = 6;

    // ===== EVENTS =====
    public struct CardMintedEvent has copy, drop {
        card_id: address,
        owner: address,
        name: String,
        atk: u16,
        def: u16,
        element: u8,
        rarity: u8,
    }

    public struct CardLeveledEvent has copy, drop {
        card_id: address,
        owner: address,
        new_level: u8,
    }

    // ===== STRUCT =====
    public struct Card has key, store {
        id: object::UID,
        name: String,
        description: String,
        image_url: String,
        atk: u16,
        def: u16,
        element: u8,    // 0=Neutral, 1=Fire, 2=Water, 3=Earth
        rarity: u8,     // 1=Common, 2=Rare, 3=Epic
        level: u8,      // 1-10
        owner: address,
        wins: u64,
        losses: u64,
    }

    // ===== PUBLIC FUNCTIONS =====

    /// Mint random card (called by minting module)
    public entry fun mint_card(
        name: String,
        description: String,
        image_url: String,
        atk: u16,
        def: u16,
        element: u8,
        rarity: u8,
        ctx: &mut tx_context::TxContext,
    ) {
        assert!(atk >= 10 && atk <= 100, EInvalidAttack);
        assert!(def >= 10 && def <= 100, EInvalidDefense);
        assert!(element <= 3, EInvalidElement);
        assert!(rarity >= 1 && rarity <= 3, EInvalidRarity);

        let sender = tx_context::sender(ctx);
        let card = Card {
            id: object::new(ctx),
            name,
            description,
            image_url,
            atk,
            def,
            element,
            rarity,
            level: 1,
            owner: sender,
            wins: 0,
            losses: 0,
        };

        let card_id = object::id(&card).to_address();

        event::emit(CardMintedEvent {
            card_id,
            owner: sender,
            name,
            atk,
            def,
            element,
            rarity,
        });

        transfer::public_transfer(card, sender);
    }

    /// Level up card
    public entry fun level_up(
        card: &mut Card,
        ctx: &tx_context::TxContext,
    ) {
        assert!(card.owner == tx_context::sender(ctx), ENotOwner);
        assert!(card.level < 10, EMaxLevelReached);

        card.level = card.level + 1;
        card.atk = card.atk + 5;
        card.def = card.def + 3;

        event::emit(CardLeveledEvent {
            card_id: object::id(card).to_address(),
            owner: card.owner,
            new_level: card.level,
        });
    }

    /// Add battle result
    public entry fun record_battle(
        card: &mut Card,
        is_win: bool,
    ) {
        if (is_win) {
            card.wins = card.wins + 1;
        } else {
            card.losses = card.losses + 1;
        };
    }

    /// Get card stats
    public fun get_card_stats(card: &Card): (u16, u16, u8, u8, u8) {
        (card.atk, card.def, card.element, card.rarity, card.level)
    }

    /// Get card owner
    public fun get_owner(card: &Card): address {
        card.owner
    }

    /// Check element advantage: Fire(1) > Earth(3) > Water(2) > Fire(1)
    public fun get_element_multiplier(attacker_elem: u8, defender_elem: u8): u16 {
        if (attacker_elem == ELEMENT_NEUTRAL || defender_elem == ELEMENT_NEUTRAL) {
            return 100
        };
        if (attacker_elem == ELEMENT_FIRE && defender_elem == ELEMENT_EARTH) {
            return 125
        };
        if (attacker_elem == ELEMENT_EARTH && defender_elem == ELEMENT_WATER) {
            return 125
        };
        if (attacker_elem == ELEMENT_WATER && defender_elem == ELEMENT_FIRE) {
            return 125
        };
        100
    }

    /// Get card details
    public fun get_details(card: &Card): (String, String, String, u64, u64) {
        (card.name, card.description, card.image_url, card.wins, card.losses)
    }
}
