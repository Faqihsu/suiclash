# ✨ SuiClash - Complete Setup Instructions

## 🎯 Current Status: Frontend Ready! ✅

**Your app is running at: http://localhost:3003**

The wallet connection system is now **safe and ready** - no more extension conflicts!

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Sui Wallet Extension
Pick your browser:

**Chrome/Brave:**
- Go to https://chrome.google.com/webstore
- Search for "Sui Wallet"
- Click "Add to Chrome"
- Approve when prompted

**Firefox:**
- Go to https://addons.mozilla.org
- Search for "Sui Wallet"  
- Click "Add to Firefox"

**Edge:**
- Go to https://microsoftedge.microsoft.com/addons
- Search for "Sui Wallet"
- Click "Get"

### Step 2: Create Your Wallet
1. Click Sui Wallet icon in toolbar
2. Click **"Create a New Wallet"**
3. **IMPORTANT**: Write down your recovery phrase on paper (never online!)
4. Create a password
5. Confirm setup ✅

### Step 3: Switch to Testnet
1. Open Sui Wallet
2. Click ⚙️ **Settings** (top right)
3. Go to **"Network"**
4. Select **"Testnet"** (not Mainnet!)
5. Close settings

### Step 4: Get Free Test SUI
1. Open Sui Wallet (you'll see 0 SUI)
2. Click **"Receive"**
3. Copy your wallet address (0x1234... format)
4. Visit: https://testnet.faucet.sui.io/
5. Paste your address
6. Click **"Request SUI"**
7. Wait 5 seconds...
8. Check Sui Wallet - You now have 1 SUI! ✅

### Step 5: Test Wallet Connection
1. **Open http://localhost:3003** in your browser
2. Look at top right - See "Connect Wallet" button?
3. Click it!
4. Sui Wallet popup appears
5. Click **"Approve"** in the popup
6. Watch the magic happen! 🪄

**SUCCESS!** You'll see:
- Button changes to "Disconnect"
- Your address shows: "✅ Connected 0x1234...5678"
- Green success badge appears

---

## 🎮 What You Can Do Now

✅ **Connect/Disconnect Wallet**
- Safe connection that won't conflict with other extensions
- Address displays in the header
- Works on both desktop and mobile

✅ **View All Game Pages**
- Home page with game intro
- Cards page (view collection when connected)
- Battle page (challenge other players)
- Market page (buy/sell cards)
- Wallet page (view your SUI balance)

✅ **Responsive Design**
- Works on phone, tablet, and desktop
- Beautiful glassmorphism design
- Smooth animations

---

## 🔗 Next Step: Deploy Smart Contracts

When you're ready to enable real blockchain features (buying cards, battles, etc.):

```bash
# Open a NEW terminal
cd ../card_forge

# Build the contracts
sui move build

# Deploy to Testnet
sui client publish --gas-budget 50000000
```

You'll see output like:
```
Successfully published package at 0xABC123DEF456...
```

Copy that Package ID and create `.env.local` in suiclash-frontend:

```env
NEXT_PUBLIC_PACKAGE_ID=0xABC123DEF456...
NEXT_PUBLIC_TOKEN_MODULE_ID=clash_token
NEXT_PUBLIC_CARD_MODULE_ID=clash_card
NEXT_PUBLIC_ARENA_MODULE_ID=clash_arena
NEXT_PUBLIC_MARKET_MODULE_ID=clash_market
```

Then restart the app: `npm run dev`

---

## ❓ Troubleshooting

### "Sui Wallet not found" message?
- **Check**: Do you see the Sui Wallet icon in your browser toolbar?
- **Fix**: Reinstall the extension
- **Try**: Restart your browser completely
- **Alternative**: Use incognito mode (fewer extensions interfere)

### "Cannot redefine property: ethereum" error? 
- **Cause**: Multiple wallet extensions conflicting
- **Fix**: Disable MetaMask or other Ethereum wallets temporarily
- **Better Fix**: Use a different browser profile
- **We Fixed**: The app now uses safe wallet detection to prevent this

### "0 SUI" showing in wallet?
- **You need**: Test coins from the faucet
- **Go to**: https://testnet.faucet.sui.io/
- **Paste**: Your wallet address
- **Click**: "Request SUI"
- **Wait**: 5 seconds

### App won't start?
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### "Port already in use" error?
- **Don't worry!** The app will use port 3003 instead
- **Open**: http://localhost:3003
- **It works!**

---

## 📁 Files You'll Need

### Frontend (running now)
```
suiclash-frontend/
├── lib/wallet-safe.ts    ← Safe wallet connection (NEW!)
├── components/Navigation.tsx  ← Wallet button (UPDATED!)
├── package.json          ← Dependencies
├── .env.local           ← Create this with contract addresses (optional)
└── ... (other files)
```

### Smart Contracts (deploy when ready)
```
card_forge/
├── sources/             ← Move contract files
│   ├── clash_token.move
│   ├── clash_card.move
│   ├── clash_arena.move
│   └── clash_market.move
├── Move.toml            ← Package config
└── tests/               ← Tests
```

---

## 🎯 Success Checklist

Mark these off as you complete them:

```
[ ] Sui Wallet extension installed
[ ] Wallet account created (recovery phrase saved!)
[ ] Network switched to Testnet
[ ] Got 1 test SUI from faucet
[ ] App opens at http://localhost:3003
[ ] "Connect Wallet" button is visible
[ ] Clicked button → Sui Wallet popup appeared
[ ] Clicked "Approve" in popup
[ ] Button changed to "Disconnect"
[ ] Your wallet address displays: 0x1234...5678
[ ] Green "✅ Connected" badge shows
```

All done? Great! You've successfully:
- 🎮 Set up the SuiClash game frontend
- 🔐 Configured secure wallet connection
- 💰 Got test SUI coins
- 🔗 Connected your wallet to the app

---

## 🚀 Future Steps

When you're ready (these are OPTIONAL):

1. **Deploy Contracts** (10 minutes)
   - Run `sui move publish` in card_forge folder
   - Copy Package ID to .env.local
   - Now you can mint cards, battle, trade!

2. **Add More Features** (if desired)
   - Leaderboard system
   - Tournament mode
   - Staking rewards
   - Guild system

3. **Go to Production** (when ready)
   - Deploy to Vercel (free)
   - Update to Mainnet (real SUI)
   - Market your game!

---

## 📚 Documentation

This folder contains helpful guides:

- **QUICK_START.md** - Ultra-fast setup
- **HOW_TO_PLAY.md** - Game rules and mechanics  
- **WALLET_SETUP_GUIDE.md** - Detailed wallet instructions
- **COMPLETE_DEPLOYMENT_GUIDE.md** - Full deployment guide
- **PROJECT_STATUS.md** - Current status and next steps
- **README.md** - Project overview

---

## 💡 Pro Tips

1. **Multiple Wallets**: Create a test account in Sui Wallet to test with different players
2. **Testnet Only**: Always make sure you're on Testnet, not Mainnet!
3. **Save Recovery Phrase**: Write it down. Seriously. On paper.
4. **Bookmark Faucet**: https://testnet.faucet.sui.io/ - you'll come back here for more test SUI
5. **Check Gas Budget**: For contract deployment, 50000000 is usually enough
6. **Monitor Balance**: Click "Receive" in Sui Wallet to see your balance anytime

---

## 🎓 Learn More

- **Sui Blockchain Docs**: https://docs.sui.io
- **Move Smart Contracts**: https://move-language.github.io/move/
- **Wallet Docs**: https://docs.sui.io/build/wallet-management
- **Game Development**: https://github.com/sui-foundation/sui-devnet-contracts

---

## ✨ You're All Set!

Your SuiClash game is ready to connect to Sui blockchain! 

**Right now, you can:**
- ✅ Connect your Sui wallet securely
- ✅ See your wallet address in the app
- ✅ Experience the beautiful game UI
- ✅ Prepare to mint and battle NFT cards

**Next step:** Try connecting your wallet!

**Open the app**: http://localhost:3003

**Questions?** Every issue is covered in the troubleshooting section above.

---

**Happy gaming! 🎮⚔️🎉**

*SuiClash - The Future of NFT Card Battle Gaming*
