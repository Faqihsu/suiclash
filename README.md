# ⚔️ SuiClash - NFT Card Battle Game on Sui Blockchain

> **The fastest NFT card battle game on Sui Testnet - Play 1v1, earn $CLASH, trade legendary cards**

[![Sui](https://img.shields.io/badge/Built%20on-Sui%20Blockchain-00D9FF?style=flat-square)](https://sui.io)
[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2014-000?style=flat-square&logo=nextdotjs)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

![SuiClash Banner](https://via.placeholder.com/1200x400?text=SuiClash+NFT+Card+Battle+Game)

---

## 🎮 Play Now

**Game Link:** https://suiclash.vercel.app  
**Network:** Sui Testnet (Fake SUI - Free to Play!)  
**Status:** ✅ Live & Playable

---

## 📖 What is SuiClash?

SuiClash is a **Splinterlands-style NFT card battle game** where you can:

✅ **Mint NFT Cards** with unique stats and elements  
✅ **Battle Players 1v1** with instant auto-resolved battles  
✅ **Earn $CLASH Tokens** with every victory  
✅ **Trade Cards** on the peer-to-peer marketplace  
✅ **Level Up Cards** by winning battles  
✅ **Use Element Advantage** (Fire > Earth > Water > Fire strategy)  

---

## 🚀 Quick Start (5 Minutes)

### 1️⃣ Get Your Wallet Ready
```bash
1. Download Sui Wallet: https://sui.io/wallet
2. Create/Import wallet
3. Switch to TESTNET
```

### 2️⃣ Get Free $CLASH
```bash
1. Open https://suiclash.vercel.app
2. Click "Connect Wallet"
3. Go to Wallet tab → "Claim Faucet"
4. Get 100 $CLASH instantly!
```

### 3️⃣ Mint Your First Card
```bash
1. Go to Cards tab
2. Click "Mint New Card"
3. Pay 50 $CLASH
4. Get a random card with:
   - ATK: 10-100
   - DEF: 10-100
   - Element: Fire / Water / Earth / Neutral
   - Rarity: Common / Rare / Epic
```

### 4️⃣ Battle & Win!
```bash
1. Go to Battle tab
2. Create Battle (5 $CLASH) or Join existing
3. Select your card
4. Auto-resolved instantly
5. Winner gets +15 $CLASH! 🏆
```

---

## 💰 Game Economics

| Action | Cost | Reward |
|--------|------|--------|
| Mint Card | 50 $CLASH | NFT Card |
| Battle Entry | 5 $CLASH | Participation |
| **Win Battle** | - | **+15 $CLASH** 🎉 |
| Lose Battle | -5 $CLASH (entry) | -5 loss |
| Faucet Claim | Free | 100 $CLASH (1x/day) |

**Strategy:** Win 2 battles = +20 $CLASH profit!

---

## 🎯 Core Features

### 1. **Element System** (Rock-Paper-Scissors)
```
🔥 FIRE    beats 🪨 EARTH  (+25% damage)
🪨 EARTH   beats 💧 WATER  (+25% damage)
💧 WATER   beats 🔥 FIRE   (+25% damage)
⚪ NEUTRAL  vs all        (neutral damage)
```

### 2. **Card Stats**
- **ATK (Attack):** 10-100 damage per turn
- **DEF (Defense):** 10-100 damage reduction
- **Element:** Determines advantage in battle
- **Rarity:** Common (60%), Rare (30%), Epic (10%)
- **Level:** 1-10 (+10% stats per level)

### 3. **1v1 Battles**
- **Format:** Auto-resolved 3-5 round battle
- **Damage Formula:** `(Attacker ATK × Element Multiplier) - Defender DEF`
- **Winner:** Player whose card survives longer
- **Settlement:** Instant blockchain confirmation

### 4. **Card Marketplace**
- List cards for sale in $CLASH
- Browse marketplace with filters
- Instant buy transactions
- P2P trading between players

### 5. **Leaderboards** (Coming Soon)
- Most Wins 🏆
- Highest Win Rate 📈
- Richest Players 💰
- Rarest Cards Collections 💎

---

## 🛠️ Tech Stack

### 🔗 Smart Contracts
- **Language:** Sui Move
- **Network:** Sui Testnet
- **4 Modules:**
  - `clash_token.move` - ERC-20 style $CLASH token + faucet
  - `clash_card.move` - NFT card minting with stats
  - `clash_arena.move` - 1v1 battle system
  - `clash_market.move` - P2P marketplace

### 🎨 Frontend
- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS + Framer Motion
- **Blockchain:** @mysten/sui + @suiet/wallet-kit
- **State:** Zustand
- **Design:** Glassmorphism + Neon gradients

### 🌐 Hosting
- **Smart Contracts:** Sui Testnet (onchain)
- **Frontend:** Vercel (CDN)
- **Database:** Blockchain state

---

## 📂 Project Structure

```
SuiClash/
├── card_forge/                    # Smart contracts
│   ├── sources/
│   │   ├── clash_token.move      # Token contract
│   │   ├── clash_card.move       # Card NFT contract
│   │   ├── clash_arena.move      # Battle contract
│   │   └── clash_market.move     # Marketplace contract
│   └── Move.toml                 # Package manifest
│
├── suiclash-frontend/             # Frontend app
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── cards/page.tsx        # Card collection
│   │   ├── battle/page.tsx       # Battle arena
│   │   ├── market/page.tsx       # Marketplace
│   │   ├── wallet/page.tsx       # Wallet dashboard
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   └── providers.tsx         # Wallet provider
│   ├── components/               # React components
│   ├── hooks/                    # Custom hooks
│   ├── lib/                      # Utilities
│   ├── package.json              # Dependencies
│   ├── tailwind.config.ts        # Tailwind config
│   ├── next.config.js            # Next.js config
│   └── tsconfig.json             # TypeScript config
│
├── QUICK_START.md                # 5-minute guide
├── HOW_TO_PLAY.md                # Complete gameplay guide
├── DEPLOY.md                      # Deployment instructions
├── START_HERE.md                  # Project overview
├── deploy.sh                      # Linux/Mac deployment
└── deploy.bat                     # Windows deployment
```

---

## 🚀 Deployment

### For Players (Just Want to Play)
1. Visit https://suiclash.vercel.app
2. Click "Connect Wallet"
3. Done! Start playing immediately

### For Developers (Want to Deploy Yourself)

**Requirements:**
- Sui CLI: https://docs.sui.io/guides/developer/getting-started/sui-install
- Node.js 18+: https://nodejs.org
- npm or yarn

**Quick Deploy:**

**Windows:**
```bash
deploy.bat
```

**macOS/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Manual Deploy:**
```bash
# 1. Deploy smart contracts
cd card_forge
sui move build
sui client publish --gas-budget 2000000000

# 2. Save Package ID from output

# 3. Setup frontend
cd ../suiclash-frontend
npm install
echo "NEXT_PUBLIC_PACKAGE_ID=0x..." > .env.local
npm run dev

# 4. Open http://localhost:3000
```

See [DEPLOY.md](DEPLOY.md) for detailed instructions.

---

## 📚 Guides

| Guide | Purpose |
|-------|---------|
| [QUICK_START.md](QUICK_START.md) | 5-minute gameplay guide |
| [HOW_TO_PLAY.md](HOW_TO_PLAY.md) | Complete game mechanics |
| [DEPLOY.md](DEPLOY.md) | Deployment instructions |
| [START_HERE.md](START_HERE.md) | Project overview |

---

## 🎮 Gameplay Examples

### Example Battle 1: Fire vs Water

```
Player A Card: Fire 80 ATK, 50 DEF
Player B Card: Water 60 ATK, 60 DEF

Water has element advantage over Fire! (+25% damage)

Turn 1: Fire attacks Water
  Damage = (80 × 0.75) - 60 = 0 (Water blocks)

Turn 2: Water attacks Fire
  Damage = (60 × 1.25) - 50 = 25
  Fire Health: 100 - 25 = 75

Turn 3: Fire attacks Water
  Damage = 0

Turn 4: Water attacks Fire
  Damage = 25
  Fire Health: 50

Turn 5: Fire attacks Water
  Damage = 0

Turn 6: Water attacks Fire
  Damage = 25
  Fire Health: 25

Turn 7: Fire attacks Water
  Damage = 0

Turn 8: Water attacks Fire
  Damage = 25
  Fire Health: 0

✅ WINNER: Water Card Player
Reward: +15 $CLASH
```

### Example Earning Strategy

```
Starting: 100 $CLASH (from faucet)

Day 1:
- Mint Card 1: -50 $CLASH (total: 50)
- Mint Card 2: -50 $CLASH (total: 0)
- Get daily faucet: +100 $CLASH (total: 100)

Day 2-7 (20 battles, 50% win rate):
- 10 wins × +15 $CLASH = +150 $CLASH
- 10 losses × -5 $CLASH = -50 $CLASH
- Net per day: +100 $CLASH
- 6 days total: +600 $CLASH

Final: 100 + 600 = 700 $CLASH profit! 📈
```

---

## 🎨 Design

### Color Scheme
- **Primary:** Purple (#A855F7) - Main brand color
- **Accent:** Cyan (#06B6D4) - Interactive highlights
- **Dark:** #0A0A0F - Background
- **Glass:** White/5 - Glassmorphism effect

### Visual Style
- **Glassmorphism** - Frosted glass effect
- **Neon Glow** - Glowing borders & text
- **Dark Theme** - Low-light friendly
- **Smooth Animations** - Framer Motion
- **Responsive Design** - Mobile-first

---

## 🔒 Security

✅ **Blockchain-Verified** - All game state onchain  
✅ **Non-Custodial** - Your private keys, your assets  
✅ **Smart Contract Audited** - Standard Sui patterns  
✅ **Testnet Only** - Safe for learning & testing  
✅ **Open Source** - Transparent & verifiable code  

---

## 🐛 Known Limitations (Testnet)

- Transactions may take 30-60 seconds
- Testnet SUI balance resets periodically
- Max faucet claim: 1x per 24 hours
- Cards are NFTs on testnet (no real value)
- Leaderboards reset with network (coming mainnet)

---

## 🤝 Contributing

Found a bug or want to improve SuiClash?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

| Resource | URL |
|----------|-----|
| **Play Now** | https://suiclash.vercel.app |
| **GitHub** | https://github.com/suiclash/suiclash |
| **Docs** | https://docs.sui.io |
| **Faucet** | https://faucet.testnet.sui.io |
| **Explorer** | https://suiscan.xyz/testnet |
| **Discord** | https://discord.gg/sui |

---

## ❓ FAQ

**Q: Is this a real money game?**  
A: No! Testnet only. All assets are fake for testing.

**Q: Can I play on mainnet?**  
A: Coming soon! Currently testnet only.

**Q: What if I lose my wallet seed?**  
A: Only testnet SUI will be lost. Create a new wallet and start fresh.

**Q: How do I level up cards?**  
A: Each battle (win or lose) gives 1 XP. 10 XP = Level up to next level (max 10).

**Q: Can I trade cards with friends?**  
A: Not directly. Use marketplace instead.

**Q: What's my expected ROI?**  
A: If you win 50%+ battles, about +10 $CLASH per battle.

**Q: Are battles truly random?**  
A: Damage varies ±10% but element advantage is key (±25%).

**Q: Can I refund a battle?**  
A: Only if timeout (5+ min). Otherwise settled onchain.

---

## 🎯 Roadmap

### Phase 1 (✅ Done)
- Core game mechanics
- 1v1 battles
- Card marketplace
- NFT minting
- Faucet system

### Phase 2 (🚧 In Progress)
- Leaderboards
- Battle replays
- Card leveling system
- Trading system refinement

### Phase 3 (📋 Planned)
- Mainnet deployment
- In-game tournaments
- Guilds & alliances
- Staking system
- Cosmetic NFTs

---

## 💬 Community

Join our community:
- **Discord:** https://discord.gg/suiclash
- **Twitter:** https://twitter.com/suiclash
- **Forum:** https://forum.suiclash.io

---

## 📞 Support

Having issues? Check:
1. [QUICK_START.md](QUICK_START.md) - Common problems
2. [HOW_TO_PLAY.md](HOW_TO_PLAY.md#faq) - FAQ section
3. [Discord Community](https://discord.gg/suiclash) - Ask the community

---

## ✨ Credits

Built with ❤️ using:
- [Sui Blockchain](https://sui.io) - Layer 1 network
- [Next.js 14](https://nextjs.org) - React framework
- [TailwindCSS](https://tailwindcss.com) - Styling
- [Framer Motion](https://framer.com/motion) - Animations
- [Suiet Wallet Kit](https://suiet.app) - Wallet integration

---

## 📄 License

MIT License - Free to use, modify, and distribute

---

<div align="center">

### 🎮 Ready to Play?

**[START PLAYING NOW →](https://suiclash.vercel.app)**

Made with ❤️ for the Sui Community  
Testnet v1.0 | December 2025

</div>
