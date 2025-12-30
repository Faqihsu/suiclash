# 🎮 SuiClash Wallet Setup & Connection Guide

## Status: ✅ Ready for Wallet Connection

Your frontend is now configured with **safe wallet detection** that prevents extension conflicts. The app is running at `http://localhost:3003`.

---

## 1️⃣ Install Sui Wallet (Browser Extension)

### For Chrome/Brave:
1. Open [Sui Wallet - Chrome Web Store](https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobpppdh)
2. Click **"Add to Chrome"**
3. Approve permissions when prompted
4. Pin the extension to your toolbar

### For Firefox:
1. Open [Sui Wallet - Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/sui-wallet/)
2. Click **"Add to Firefox"**
3. Approve permissions

### For Edge:
1. Open [Sui Wallet - Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/sui-wallet/epkakfldpogjjomboegeemmppomkjbne)
2. Click **"Get"**
3. Approve permissions

---

## 2️⃣ Create Sui Wallet Account

1. **Open the extension** by clicking its icon in your toolbar
2. **Click "Create a New Wallet"** or **"Create a Passphrase Wallet"**
3. **Save your recovery phrase** in a safe place (NEVER share it)
4. **Set a password** (remember this for signing transactions)
5. **Confirm** - Your wallet is ready! ✅

---

## 3️⃣ Switch to Sui Testnet (Important!)

1. Open Sui Wallet extension
2. Click the **⚙️ Settings** icon (top right)
3. Go to **"Network"**
4. Select **"Testnet"** (not Mainnet)
5. Close settings - You're now on Testnet ✅

> **Why Testnet?** - You get free test SUI coins. Perfect for development!

---

## 4️⃣ Get Free Test SUI Coins

1. Open Sui Wallet (you should see **0 SUI** balance)
2. Click **"Receive"**
3. Copy your wallet address
4. Visit [Sui Faucet](https://testnet.faucet.sui.io/)
5. Paste your address
6. Click **"Request SUI"**
7. Wait a few seconds - You'll receive **1 SUI test coin** ✅

> You can request tokens once per hour. Coins appear instantly!

---

## 5️⃣ Test Wallet Connection in App

1. Go to [http://localhost:3003](http://localhost:3003)
2. Click **"Connect Wallet"** button (top right)
3. Sui Wallet popup appears → Click **"Approve"**
4. After approval:
   - Button changes to **"Disconnect"**
   - Your wallet address shows: `0x1234...5678`
   - Green badge says **"✅ Connected"**

**Success!** 🎉 Your wallet is connected!

---

## 6️⃣ Deploy Smart Contracts to Testnet

Before blockchain features work, you need to deploy the Sui Move contracts:

### Step A: Navigate to contracts folder
```bash
cd ../card_forge
```

### Step B: Build the contracts
```bash
sui move build
```

You should see:
```
BUILDING card_clash
Compiling sui = { version = "=0.42.0" }
Compiling card_clash
Finished `dev` release [unoptimized + debuginfo] target(s) in X.XXs
```

### Step C: Deploy to Testnet
```bash
sui client publish --gas-budget 50000000
```

The terminal will show deployment info. Copy the **Package ID** that appears:
```
Successfully published package at 0x1234567890abcdef...
```

### Step D: Update Frontend Configuration

1. Open `.env.local` in the suiclash-frontend folder
2. Add these variables:
```env
# Copy from deployment output above
NEXT_PUBLIC_PACKAGE_ID=0x1234567890abcdef...
NEXT_PUBLIC_TOKEN_MODULE_ID=clash_token
NEXT_PUBLIC_CARD_MODULE_ID=clash_card
NEXT_PUBLIC_ARENA_MODULE_ID=clash_arena
NEXT_PUBLIC_MARKET_MODULE_ID=clash_market
```

3. Save the file
4. Restart the dev server: `npm run dev`

---

## 7️⃣ Troubleshooting

### ❌ "Sui Wallet not found"
- **Solution**: Install the browser extension (Step 1)
- **Check**: Look for Sui icon in your toolbar
- **Verify**: Click extension → it should show your wallet

### ❌ "Cannot redefine property: ethereum"
- **Cause**: Multiple wallet extensions conflicting
- **Solution 1**: Disable MetaMask or other Ethereum wallets temporarily
- **Solution 2**: Use Incognito mode (extensions are limited)
- **Solution 3**: Use a different browser profile

### ❌ "⚠️ Install Sui Wallet" message in app
- **Cause**: Extension not properly installed
- **Solution**: Restart your browser and reinstall extension
- **Verify**: Extension icon visible in toolbar

### ❌ 0 SUI Balance
- **Cause**: Need test coins from faucet
- **Solution**: Follow Step 4 to get free test SUI
- **Verify**: Check Sui Wallet → should show "1 SUI"

### ❌ Connection fails with error
- **Solution**: Check browser console for detailed error
- **Contact**: See error message and check [Sui Docs](https://docs.sui.io)

---

## 8️⃣ Next Steps After Connection

✅ **Wallet Connected** → Now you can:

1. **Mint Test Cards** - Buy cards with test SUI
2. **Create Battles** - Challenge other players
3. **View Collection** - See your owned NFT cards
4. **Trade on Market** - Sell/buy cards from other players
5. **Earn Rewards** - Win battles and earn SUI

---

## 📋 Checklist

- [ ] Sui Wallet extension installed
- [ ] Wallet account created with recovery phrase saved
- [ ] Network set to **Testnet**
- [ ] Received 1 test SUI from faucet
- [ ] App shows "✅ Connected" with your wallet address
- [ ] (Optional) Smart contracts deployed to Testnet
- [ ] (Optional) Package ID configured in .env.local

---

## 🔗 Useful Links

- [Sui Wallet Extension](https://sui.io/products/sui-wallet)
- [Sui Faucet (Testnet)](https://testnet.faucet.sui.io/)
- [Sui Documentation](https://docs.sui.io)
- [Sui Testnet Explorer](https://testnet.suiscan.xyz/)
- [Sui Move Book](https://move-language.github.io/move/)

---

## 💡 Pro Tips

1. **Multiple Accounts**: Sui Wallet supports multiple accounts. Create a test account!
2. **Export Seed**: In wallet settings, you can export your seed phrase
3. **Network Switching**: Always double-check you're on **Testnet**!
4. **Gas Fees**: Testnet transactions cost little/no test SUI
5. **Bookmark Faucet**: You'll need it to get more test coins

---

**Questions?** Check the main [README.md](README.md) for more info!

App Status: **✅ Running at http://localhost:3003**
