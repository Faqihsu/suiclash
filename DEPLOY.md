# SuiClash - Complete Deployment Guide

> **Full-Stack NFT Card Battle Game on Sui Blockchain**

## 📦 What's Included

✅ **Backend** (Move Smart Contracts)
- `clash_token.move` - $CLASH token
- `clash_card.move` - NFT Cards
- `clash_arena.move` - Battle system
- `clash_market.move` - Marketplace

✅ **Frontend** (Next.js 14)
- 5-Tab Dashboard (Home, Cards, Battle, Market, Wallet)
- Wallet integration
- Modern UI (Glassmorphism + Animations)
- Mobile responsive

## 🚀 Quick Deploy (5 minutes)

### 1️⃣ Prerequisites

```bash
# Install Sui CLI
curl -fsSL https://sui-releases.s3.amazonaws.com/sui-mainnet-v1.41.0-ubuntu-x86_64.tgz | tar xz
export PATH=$PATH:./sui-*-ubuntu-x86_64/bin

# Or on macOS:
brew install sui
```

### 2️⃣ Deploy Smart Contracts

```bash
cd card_forge

# Switch to testnet
sui client switch testnet

# Get testnet SUI
sui client faucet

# Build
sui move build

# Publish (save the PACKAGE_ID!)
sui client publish --gas-budget 2000000000
```

**Output example:**
```
Package ID: 0x1234567890abcdef...
```

### 3️⃣ Deploy Frontend

```bash
cd ../suiclash-frontend

# Create environment file
cp .env.example .env.local

# Edit .env.local with your PACKAGE_ID
nano .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_PACKAGE_ID=0x1234567890abcdef
NEXT_PUBLIC_CLASH_CARD_ID=0x1234567890abcdef
NEXT_PUBLIC_CLASH_TOKEN_ID=0x1234567890abcdef
NEXT_PUBLIC_CLASH_ARENA_ID=0x1234567890abcdef
NEXT_PUBLIC_CLASH_MARKET_ID=0x1234567890abcdef
```

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Visit: **http://localhost:3000** 🎮

## 🎮 Test Flow (30 minutes)

### Step 1: Get Testnet SUI
```bash
sui client faucet
```

### Step 2: Connect Wallet
- Visit http://localhost:3000
- Click "Connect Wallet"
- Select your Sui wallet (Sui Wallet, OKX, Martian, etc.)

### Step 3: Mint Cards
- Go to **🔥 My Cards** tab
- Click "Mint New Card"
- Cost: 50 $CLASH (use faucet first!)
- Get random card

### Step 4: Create Battle
- Click "Create Battle"
- Select your card
- Pay 5 $CLASH entry fee
- Get battle ID

### Step 5: Join Battle (use 2nd account)
- Open incognito window
- Connect different wallet
- Go to **⚔️ Battle** tab
- Find active battle
- Click "Join Battle"
- Pay 5 $CLASH

### Step 6: Resolve Battle
- System auto-calculates winner
- Winner gets 15 $CLASH
- Check **💰 Wallet** tab for earnings

### Step 7: Trade on Market
- Go to **🏪 Market** tab
- Buy/sell cards with $CLASH
- Track your portfolio

## 📊 Contract Functions

### Mint Card
```bash
sui client call \
  --package PACKAGE_ID \
  --module clash_card \
  --function mint_card \
  --args "MyCard" "A cool card" "https://example.com/image.png" "50" "40" "1" "1" \
  --gas-budget 100000000
```

### Create Battle
```bash
sui client call \
  --package PACKAGE_ID \
  --module clash_arena \
  --function create_battle \
  --args CARD_ID CLASH_COIN \
  --gas-budget 100000000
```

### Buy Card
```bash
sui client call \
  --package PACKAGE_ID \
  --module clash_market \
  --function buy_card \
  --args LISTING_ID PAYMENT \
  --gas-budget 100000000
```

## 🔧 Troubleshooting

### "connection refused"
```bash
# Make sure you're on testnet
sui client switch testnet

# Check network
sui client envs
```

### "insufficient balance"
```bash
# Get more testnet SUI
sui client faucet
```

### "transaction failed"
```bash
# Increase gas budget
--gas-budget 3000000000
```

### "wallet not connecting"
- Clear browser cache
- Try incognito window
- Install latest wallet extension

## 📱 Deployment to Production

### Frontend (Vercel)
```bash
cd suiclash-frontend
npm run build
vercel deploy
```

### Mainnet Deployment
```bash
# Switch to mainnet
sui client switch mainnet

# Get real SUI from exchange

# Publish to mainnet
sui client publish --gas-budget 2000000000
```

⚠️ **Warning:** Mainnet deployment costs real SUI and can't be undone!

## 📈 Expected Metrics

**First Hour:**
- 10 cards minted
- 5 battles
- 100 $CLASH earned

**First Day:**
- 50 cards minted
- 50 battles  
- 1000 $CLASH in circulation

**First Week:**
- 500 players
- 1000+ battles
- 50k $CLASH tokens earned

## 🎨 Customization

### Change Game Economics
Edit `clash_token.move`:
```move
const ENTRY_FEE: u64 = 5_000_000_000;      // Entry fee
const WINNER_REWARD: u64 = 15_000_000_000; // Reward
```

### Change Card Stats
Edit `clash_card.move`:
```move
const MAX_ATK: u16 = 100;
const MAX_DEF: u16 = 100;
const MAX_LEVEL: u8 = 10;
```

### Change UI Colors
Edit `suiclash-frontend/tailwind.config.ts`:
```ts
colors: {
  primary: '#A855F7',
  accent: '#06B6D4',
}
```

## 📚 Documentation

- [Sui Docs](https://docs.sui.io)
- [Sui Move Tutorial](https://docs.sui.io/concepts/sui-move-concepts)
- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com)

## 🐛 Support

- **Issues**: GitHub Issues
- **Community**: [Sui Discord](https://discord.gg/sui)
- **Docs**: `./README.md` in both `/card_forge` and `/suiclash-frontend`

## ✅ Deployment Checklist

- [ ] Installed Sui CLI
- [ ] Got testnet SUI from faucet
- [ ] Published smart contracts
- [ ] Saved PACKAGE_ID
- [ ] Created `.env.local` in frontend
- [ ] Installed npm dependencies
- [ ] Started dev server
- [ ] Connected wallet
- [ ] Minted first card
- [ ] Created battle
- [ ] Won battle & earned $CLASH

## 🎯 Next Steps

1. **Gameplay**: Get 10 battle wins
2. **Trading**: Buy/sell 5 cards on market
3. **Optimization**: Deploy to mainnet
4. **Monetization**: Launch on-chain
5. **Growth**: Market your game

---

**Ready to launch?** Run `bash deploy.sh` (or `deploy.bat` on Windows) now! 🚀

**Questions?** Check out the full README in `/card_forge` and `/suiclash-frontend`
