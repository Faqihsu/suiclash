/// Marketplace - Buy/Sell cards
module suiclash::clash_market {
    use sui::object::{Self};
    use sui::transfer;
    use sui::tx_context;
    use sui::coin::{Self, Coin};
    use sui::event;

    use suiclash::clash_token::CLASH_TOKEN;
    use suiclash::clash_card::Card;

    // ===== ERRORS =====
    const EInvalidSeller: u64 = 1;
    const EInsufficientPayment: u64 = 2;

    // ===== EVENTS =====
    public struct CardListedEvent has copy, drop {
        listing_id: address,
        card_id: address,
        seller: address,
        price: u64,
    }

    public struct CardSoldEvent has copy, drop {
        listing_id: address,
        card_id: address,
        seller: address,
        buyer: address,
        price: u64,
    }

    public struct ListingCancelledEvent has copy, drop {
        listing_id: address,
        seller: address,
    }

    // ===== STRUCT =====
    public struct Listing has key {
        id: object::UID,
        card_id: object::ID,
        card: Card,
        seller: address,
        price: u64,
    }

    // ===== PUBLIC FUNCTIONS =====

    /// List card for sale
    public entry fun list_card(
        card: Card,
        price: u64,
        ctx: &mut tx_context::TxContext,
    ) {
        let sender = tx_context::sender(ctx);
        let card_id = object::id(&card);

        let listing = Listing {
            id: object::new(ctx),
            card_id,
            card,
            seller: sender,
            price,
        };

        let listing_id = object::id(&listing).to_address();

        event::emit(CardListedEvent {
            listing_id,
            card_id: card_id.to_address(),
            seller: sender,
            price,
        });

        transfer::share_object(listing);
    }

    /// Buy listed card
    public entry fun buy_card(
        listing: Listing,
        payment: &mut Coin<CLASH_TOKEN>,
        ctx: &mut tx_context::TxContext,
    ) {
        assert!(coin::value(payment) >= listing.price, EInsufficientPayment);

        let buyer = tx_context::sender(ctx);
        let seller = listing.seller;
        let card_id = listing.card_id;
        let price = listing.price;
        let listing_id = object::id(&listing).to_address();

        let Listing {
            id,
            card_id: _,
            card,
            seller: _,
            price: _,
        } = listing;

        transfer::public_transfer(card, buyer);

        let payment_coin = coin::split(payment, price, ctx);
        transfer::public_transfer(payment_coin, seller);

        event::emit(CardSoldEvent {
            listing_id,
            card_id: card_id.to_address(),
            seller,
            buyer,
            price,
        });

        object::delete(id);
    }

    /// Cancel listing
    public entry fun cancel_listing(
        listing: Listing,
        ctx: &tx_context::TxContext,
    ) {
        assert!(listing.seller == tx_context::sender(ctx), EInvalidSeller);

        let seller = listing.seller;
        let listing_addr = object::id(&listing).to_address();
        
        let Listing {
            id,
            card_id: _,
            card,
            seller: _,
            price: _,
        } = listing;

        transfer::public_transfer(card, seller);

        event::emit(ListingCancelledEvent {
            listing_id: listing_addr,
            seller,
        });

        object::delete(id);
    }

    /// Get listing price
    public fun get_price(listing: &Listing): u64 {
        listing.price
    }
}
