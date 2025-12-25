# SuiClash - NFT Card Battle Game 🎮⚔️

> **Modern 2025 Web3 Gaming Platform on Sui Blockchain**

## 🎯 Game Overview

SuiClash is a fast-paced NFT card battle game where players:
- 🃏 Mint random collectible cards with unique stats
- ⚔️ Battle 1v1 in 30-second rounds
- 🏆 Win $CLASH tokens (5x entry fee)
- 🛒 Trade cards on instant marketplace

**Gameplay Flow:**
```
1. Connect Wallet → 2. Mint Card (50 $CLASH) → 3. Find Opponent
4. Battle 30sec → 5. Winner gets 15 $CLASH → 6. Repeat!
```

## 💡 Game Mechanics

### Card System
- **Stats**: Attack (10-100), Defense (10-100), Level (1-10)
- **Element**: Neutral, Fire, Water, Earth
- **Rarity**: Common, Rare, Epic
- **Bonus**: Win battles → gain experience → level up → stat boost

### Battle Formula
```
Damage = max(1, (Attacker ATK × Element Multiplier) - Defender DEF)
Winner = Higher total damage
Elemental Bonus: Fire > Earth > Water > Fire (+25% ATK)
```

### Economy
- **Mint Cost**: 50 $CLASH
- **Battle Entry**: 5 $CLASH per player (10 total pool)
- **Winner Reward**: 15 $CLASH
- **Net Earning**: +5 $CLASH per win

## 🏗️ Smart Contracts

### clash_token.move
- $CLASH ERC-20 equivalent on Sui
- Mint, Burn, Faucet (testnet)

### clash_card.move
- NFT Card struct with metadata
- Minting with random stats
- Level up system
- Battle history tracking

### clash_arena.move
- Create battle (lock Player A's card + fee)
- Join battle (lock Player B's card + fee)
- Resolve battle (calculate winner, distribute reward)

### clash_market.move
- List card for sale
- Instant buy (no auction)
- Cancel listing

## 🚀 Quick Start

### Prerequisites
```bash
# Install Sui CLI
curl -fsSL https://sui-releases.s3.amazonaws.com/sui-mainnet-v1.41.0-ubuntu-x86_64.tgz | tar xz
export PATH=$PATH:./sui-*-ubuntu-x86_64/bin
```

### Deploy Contracts

```bash
# Switch to testnet
sui client switch testnet

# Get testnet SUI
sui client faucet

# Build
sui move build

# Publish (copy PACKAGE_ID from output)
sui client publish --gas-budget 2000000000
```

**Save these for .env:**
```
NEXT_PUBLIC_PACKAGE_ID=0x...
NEXT_PUBLIC_CLASH_TOKEN_ID=0x...
NEXT_PUBLIC_CLASH_CARD_ID=0x...
NEXT_PUBLIC_CLASH_ARENA_ID=0x...
NEXT_PUBLIC_CLASH_MARKET_ID=0x...
```

### Run Frontend

```bash
cd frontend
npm install
npm run dev  # http://localhost:3000
```

## 📱 Frontend Stack

**Tech:**
- Next.js 14 + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- @mysten/wallet-kit (Sui wallet)
- Sonner (notifications)

**Pages:**
- 🏠 `/` - Home & quick play
- 🔥 `/cards` - My card collection
- ⚔️ `/battle` - Active battles
- 🏪 `/market` - Card marketplace
- 💰 `/wallet` - $CLASH balance & faucet

**Features:**
- ✅ Dark/Light theme
- ✅ Mobile responsive
- ✅ Real-time battle updates
- ✅ Smooth animations (Framer Motion)
- ✅ Card rarity colors (Common🟢 Rare🟣 Epic🟡)
- ✅ Toast notifications

## 🎮 Playing the Game

### 1. Get Testnet SUI
```bash
sui client faucet
```

### 2. Mint First Card
- Click "Mint Card"
- Pay 50 $CLASH (use faucet if needed)
- Receive random card (Common/Rare/Epic)

### 3. Create Battle
- Click "Create Battle"
- Select your strongest card
- Pay 5 $CLASH entry fee
- Wait for opponent

### 4. Battle!
- Opponent joins with their card
- System calculates damage (30 second auto-resolve)
- Winner receives 15 $CLASH
- Cards gain experience

### 5. Trade on Marketplace
- List card with price
- Other players can buy instantly
- Get $CLASH to mint more cards

## 📊 Game Stats

**Example Session (2 hours):**
```
- 10 cards minted (500 $CLASH cost)
- 20 battles won (100 $CLASH reward)
- Marketplace sales (50 $CLASH revenue)
- Net: +350 $CLASH earned
```

## 🔗 Testnet Faucet

Get free testnet SUI:
```bash
# Faucet 1
curl --location --request POST 'https://faucet.testnet.sui.io/gas'

# Faucet 2  
sui client faucet --faucet-url https://faucet.testnet.sui.io/gas
```

## 🐛 Troubleshooting

**"Connection refused" error**
- Check Sui testnet is running
- Reset wallet connection

**"Insufficient balance"**
- Use `sui client faucet` to get more SUI

**"Transaction failed"**
- Increase gas budget: `--gas-budget 3000000000`

## 📝 Contract Functions

### Mint Card
```
clash_card::mint_card(name, description, image_url, atk, def, element, rarity, ctx)
```

### Create Battle
```
clash_arena::create_battle(card, entry_fee_coin, ctx)
```

### Buy Card
```
clash_market::buy_card(listing, payment_coin, ctx)
```

### Get Faucet Tokens (testnet)
```
clash_token::mint_from_faucet(faucet, amount, ctx)
```

## 🎨 Design System

**Colors:**
- Primary: `#A855F7` (Neon Purple)
- Accent: `#06B6D4` (Cyan)
- Background: `#0A0A0F` (Dark)
- Success: `#10B981` (Green)

**Typography:**
- Font: Inter (UI), JetBrains Mono (Code)
- Hero: 3.5rem Bold
- Heading: 2rem Bold
- Body: 1rem Regular

**Effects:**
- Glassmorphism (backdrop-blur-md)
- Neon glow (shadow-[0_0_30px])
- Smooth transitions (300ms)
- Framer Motion animations

## 📈 Roadmap

**Week 1 (MVP)** ✅
- ✅ Battle 1v1
- ✅ Card minting
- ✅ Marketplace

**Week 2**
- [ ] Card fusion system
- [ ] Deck system (3v3)
- [ ] Tournament mode

**Week 3**
- [ ] Staking rewards
- [ ] Leaderboard
- [ ] Daily quests

## 📄 License

MIT License - See LICENSE file

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Test on testnet
4. Submit PR

## 📞 Support

- Discord: [SuiClash Community](https://discord.gg/suiclash)
- Twitter: [@SuiClash](https://twitter.com/suiclash)
- Docs: [docs.suiclash.io](https://docs.suiclash.io)

---

**Play now at:** `https://suiclash.io` (testnet)

**Deploy date:** Dec 25, 2025
**Maintainers:** SuiClash Core Team
