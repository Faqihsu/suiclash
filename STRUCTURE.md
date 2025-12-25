# SuiClash - Project Structure

## 📁 Directory Layout

```
suiclash/
├── card_forge/                    # Smart contracts (Sui Move)
│   ├── sources/
│   │   ├── clash_token.move       # $CLASH token
│   │   ├── clash_card.move        # NFT cards
│   │   ├── clash_arena.move       # 1v1 battles
│   │   └── clash_market.move      # Marketplace
│   ├── Move.toml                  # Move manifest
│   ├── README.md                  # Backend docs
│   ├── deploy.sh                  # Deploy script (Linux/Mac)
│   └── deploy.bat                 # Deploy script (Windows)
│
├── suiclash-frontend/             # Next.js frontend
│   ├── app/
│   │   ├── page.tsx               # 🏠 Home
│   │   ├── cards/
│   │   │   └── page.tsx           # 🔥 My Cards
│   │   ├── battle/
│   │   │   └── page.tsx           # ⚔️ Battle
│   │   ├── market/
│   │   │   └── page.tsx           # 🏪 Market
│   │   ├── wallet/
│   │   │   └── page.tsx           # 💰 Wallet
│   │   ├── layout.tsx             # Root layout
│   │   ├── globals.css            # Global styles
│   │   └── providers.tsx          # Wallet provider
│   ├── components/                # Reusable components
│   ├── lib/                       # Utilities
│   ├── hooks/                     # Custom hooks
│   ├── public/                    # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── next.config.js
│   ├── .env.example
│   └── README.md
│
├── DEPLOY.md                      # Deployment guide
└── README.md                      # Project overview
```

## 🎮 5-Tab Dashboard

```
┌─────────────────────────────────────┐
│  ⚔️ SuiClash        [Connect Wallet] │
├─────────────────────────────────────┤
│ 🏠 HOME | 🔥 CARDS | ⚔️ BATTLE | 🏪 MARKET | 💰 WALLET │
├─────────────────────────────────────┤
│                                     │
│          [Active Page Content]      │
│                                     │
└─────────────────────────────────────┘
```

### Tab Features

**🏠 HOME**
- Hero section
- Quick start guide
- Live statistics
- Call-to-action

**🔥 CARDS**
- Grid of player's cards
- Filter by rarity
- Card stats display
- Actions: Battle, Sell

**⚔️ BATTLE**
- Active battles list
- Create new battle
- Join existing battle
- Battle history

**🏪 MARKET**
- Searchable card listings
- Filter by rarity/element
- Instant buy cards
- Sell your cards

**💰 WALLET**
- $CLASH balance
- Testnet faucet
- Transaction history
- Player statistics

## 🏗️ Smart Contract Architecture

```
clash_token.move
├── CLASH (witness struct)
├── Faucet (capability)
└── Functions:
    ├── init() - Initialize token
    ├── mint_from_faucet() - Mint tokens
    └── burn() - Burn tokens

clash_card.move
├── Card (NFT struct)
├── Constants (elements, rarities)
└── Functions:
    ├── mint_card() - Create new card
    ├── level_up() - Level up card
    ├── record_battle() - Track battles
    └── get_element_multiplier() - Elemental bonus

clash_arena.move
├── Battle (game state)
└── Functions:
    ├── create_battle() - Player A creates
    ├── join_battle() - Player B joins
    └── resolve_battle() - Calculate winner

clash_market.move
├── Listing (marketplace listing)
└── Functions:
    ├── list_card() - List for sale
    ├── buy_card() - Purchase card
    └── cancel_listing() - Remove listing
```

## 🎨 Frontend Stack

```
Next.js 14
├── React 18
├── TypeScript
├── Tailwind CSS
│   └── Custom components (glass, glow-border, badges)
├── Framer Motion (animations)
├── @mysten/wallet-kit (wallet connection)
├── @mysten/sui (blockchain SDK)
├── shadcn/ui (UI components)
├── Sonner (notifications)
└── Zustand (state management)
```

## 📊 Data Flow

```
User Interface (React Components)
         ↓
   Wallet Connection
   (@mysten/wallet-kit)
         ↓
   Sui SDK (@mysten/sui)
         ↓
   Smart Contracts (Move)
   - clash_token
   - clash_card
   - clash_arena
   - clash_market
         ↓
   Sui Blockchain (Testnet)
         ↓
   Events & Transactions
         ↓
   Update UI State
```

## 🔄 Game Flow

```
1. Connect Wallet
   ↓
2. Get SUI from Faucet
   ↓
3. Mint Card (50 $CLASH)
   ↓
4. Create Battle (5 $CLASH)
   ↓
5. Opponent Joins (5 $CLASH)
   ↓
6. System Calculates Damage
   (ATK × Element Bonus) - DEF
   ↓
7. Winner Gets 15 $CLASH
   ↓
8. Trade on Marketplace
   ↓
9. Repeat!
```

## 🚀 Deployment Steps

1. **Build Contracts**
   ```bash
   cd card_forge
   sui move build
   ```

2. **Publish to Testnet**
   ```bash
   sui client publish --gas-budget 2000000000
   ```

3. **Setup Frontend .env**
   ```bash
   cd ../suiclash-frontend
   cp .env.example .env.local
   # Edit with PACKAGE_ID
   ```

4. **Install & Run**
   ```bash
   npm install
   npm run dev
   ```

5. **Deploy to Production**
   ```bash
   npm run build
   vercel deploy
   ```

## 📝 Configuration Files

**Move.toml** - Package manifest
```toml
[package]
name = "suiclash"
edition = "2024.beta"

[addresses]
suiclash = "0x0"
```

**.env.local** - Frontend configuration
```
NEXT_PUBLIC_PACKAGE_ID=0x...
NEXT_PUBLIC_RPC_URL=https://...
```

**tailwind.config.ts** - Styling theme
```ts
colors: {
  primary: '#A855F7',      // Neon Purple
  accent: '#06B6D4',       // Cyan
  dark: '#0A0A0F',         // Dark background
}
```

## 🎯 Development Workflow

1. **Make contract changes**
   ```bash
   cd card_forge
   # Edit .move files
   sui move build
   ```

2. **Test on testnet**
   ```bash
   sui client publish --gas-budget 2000000000
   ```

3. **Update frontend**
   ```bash
   cd ../suiclash-frontend
   # Update .env.local with new PACKAGE_ID
   ```

4. **Test UI**
   ```bash
   npm run dev
   ```

5. **Deploy**
   ```bash
   npm run build
   vercel deploy
   ```

## 📚 Resources

- [Sui Documentation](https://docs.sui.io)
- [Move Language](https://docs.sui.io/concepts/sui-move-concepts)
- [Sui SDK](https://sdk.mystenlabs.com)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)

---

**Last Updated:** Dec 25, 2025  
**Maintainers:** SuiClash Core Team
