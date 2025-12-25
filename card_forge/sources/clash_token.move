/// $CLASH Token - Game currency
/// Support: Minting, Faucet, Transfer
module suiclash::clash_token {
    use sui::coin::{Self, Coin};
    use sui::transfer;
    use sui::tx_context;
    use sui::object;
    use std::option;

    /// CLASH_TOKEN witness for one-time witness pattern
    public struct CLASH_TOKEN has drop {}

    /// Faucet capability for testnet minting
    public struct Faucet has key {
        id: object::UID,
        cap: coin::TreasuryCap<CLASH_TOKEN>,
    }

    /// Initialize CLASH token
    fun init(witness: CLASH_TOKEN, ctx: &mut tx_context::TxContext) {
        let (treasury, metadata) = coin::create_currency(
            witness,
            9,  // decimals
            b"CLASH",
            b"SuiClash Token",
            b"Play NFT card battle game on Sui and earn $CLASH",
            option::none(),
            ctx
        );

        // Create faucet for testnet
        let faucet = Faucet {
            id: object::new(ctx),
            cap: treasury,
        };

        transfer::public_share_object(metadata);
        transfer::transfer(faucet, tx_context::sender(ctx));
    }

    /// Mint tokens from faucet (testnet only)
    public entry fun mint_from_faucet(
        faucet: &mut Faucet,
        amount: u64,
        ctx: &mut tx_context::TxContext,
    ) {
        let coin = coin::mint(&mut faucet.cap, amount, ctx);
        transfer::public_transfer(coin, tx_context::sender(ctx));
    }

    /// Burn tokens
    public entry fun burn(
        faucet: &mut Faucet,
        coin: Coin<CLASH_TOKEN>,
    ) {
        coin::burn(&mut faucet.cap, coin);
    }
}
