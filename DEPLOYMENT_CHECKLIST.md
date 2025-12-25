# ✅ SuiClash - Final Deployment Checklist

## Pre-Deployment ✓

- [ ] Sui CLI installed: `sui --version`
- [ ] Node.js installed: `node -v`
- [ ] npm installed: `npm -v`
- [ ] Sui Wallet created & set to Testnet
- [ ] Test SUI available: https://faucet.testnet.sui.io

---

## Smart Contract Deployment

### Build Phase
```bash
cd card_forge
sui move build
```
- [ ] Build succeeds with 0 errors
- [ ] No warnings about unused imports

### Publish Phase
```bash
sui client switch testnet
sui client faucet
sui client publish --gas-budget 2000000000
```

**📝 SAVE THIS INFORMATION:**
```
Deployment Digest: ____________________
Package ID:        0x__________________
Deployer Address:  0x__________________
Timestamp:         ____________________
```

### Verification
1. Open Sui Scan: https://suiscan.xyz/testnet
2. Search for your Package ID
3. Verify 4 modules exist:
   - [ ] clash_token
   - [ ] clash_card
   - [ ] clash_arena
   - [ ] clash_market

---

## Frontend Configuration

### Environment Setup
```bash
cd ../suiclash-frontend
```

**Create `.env.local`:**
```
NEXT_PUBLIC_NETWORK=testnet
NEXT_PUBLIC_PACKAGE_ID=0x<YOUR_PACKAGE_ID>
NEXT_PUBLIC_CLASH_TOKEN_ID=0x<YOUR_PACKAGE_ID>
NEXT_PUBLIC_CLASH_CARD_ID=0x<YOUR_PACKAGE_ID>
NEXT_PUBLIC_CLASH_ARENA_ID=0x<YOUR_PACKAGE_ID>
NEXT_PUBLIC_CLASH_MARKET_ID=0x<YOUR_PACKAGE_ID>
NEXT_PUBLIC_NETWORK=testnet
```

- [ ] .env.local created
- [ ] Package IDs pasted correctly
- [ ] File saved

### Dependencies Installation
```bash
npm install
```
- [ ] All dependencies installed
- [ ] No major security vulnerabilities
- [ ] node_modules created

### Build Test
```bash
npm run build
```
- [ ] Build succeeds
- [ ] No TypeScript errors
- [ ] .next folder created

---

## Local Testing

### Start Dev Server
```bash
npm run dev
```
- [ ] Server starts at http://localhost:3000
- [ ] No console errors
- [ ] Hot reload working

### Basic Functionality Check
1. **Navigation** ✓
   - [ ] Home page loads
   - [ ] All 5 tabs visible (Home, Cards, Battle, Market, Wallet)
   - [ ] Mobile menu works

2. **Wallet Connection** ✓
   - [ ] "Connect Wallet" button visible
   - [ ] Can click to open wallet modal
   - [ ] Wallet extension responds

3. **Cards Page** ✓
   - [ ] Cards grid displays
   - [ ] Rarity filters work
   - [ ] Stats visible (ATK, DEF, Level)

4. **Battle Page** ✓
   - [ ] Active battles list shows
   - [ ] Battle creation button visible
   - [ ] Join battle buttons work

5. **Market Page** ✓
   - [ ] Market listings display
   - [ ] Search functionality works
   - [ ] Filter buttons respond
   - [ ] Buy buttons visible

6. **Wallet Page** ✓
   - [ ] Balance display area
   - [ ] Faucet button visible
   - [ ] Transaction history layout shows

---

## Production Deployment

### Option A: Deploy on Vercel (Recommended)
1. [ ] GitHub account created
2. [ ] Repository pushed to GitHub
3. [ ] Vercel account created (sync with GitHub)
4. [ ] Project imported to Vercel
5. [ ] Environment variables added to Vercel:
   - [ ] NEXT_PUBLIC_PACKAGE_ID
   - [ ] NEXT_PUBLIC_CLASH_TOKEN_ID
   - [ ] NEXT_PUBLIC_CLASH_CARD_ID
   - [ ] NEXT_PUBLIC_CLASH_ARENA_ID
   - [ ] NEXT_PUBLIC_CLASH_MARKET_ID
6. [ ] Deployment triggered
7. [ ] Live URL: https://suiclash.vercel.app

### Option B: Self-Hosted
1. [ ] Server/VPS obtained
2. [ ] Node.js installed on server
3. [ ] PM2 or similar process manager installed
4. [ ] Repository cloned
5. [ ] Environment variables configured
6. [ ] Build created: `npm run build`
7. [ ] Server started: `npm start` or PM2
8. [ ] Domain configured (DNS)
9. [ ] SSL certificate installed
10. [ ] Live URL accessible

---

## Post-Deployment

### Verification
- [ ] Game loads at deployment URL
- [ ] Wallet connection works
- [ ] Console has no critical errors
- [ ] Mobile responsive on all pages

### First Test Game
1. [ ] Claim faucet ($CLASH received)
2. [ ] Mint card (card appears in inventory)
3. [ ] Create battle (battle appears in list)
4. [ ] Join existing battle (battle resolves)
5. [ ] Win battle (reward received)
6. [ ] Check balance updated

### Public Testing
- [ ] Share URL with friends
- [ ] Get feedback on gameplay
- [ ] Monitor performance
- [ ] Check for bugs/crashes

---

## Success Criteria ✓

**All items checked = READY FOR PUBLIC!**

- ✅ Smart contracts deployed to Sui Testnet
- ✅ Frontend built and deployed
- ✅ Wallet integration working
- ✅ Game fully playable (mint → battle → earn)
- ✅ No critical errors
- ✅ Mobile responsive
- ✅ Documentation complete

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Build fails | Delete node_modules + package-lock.json, run npm install again |
| Wallet won't connect | Refresh page, check extension enabled, restart browser |
| Package ID errors | Verify .env.local has correct PACKAGE_ID from deployment |
| Transactions stuck | Wait 60s, check Sui Scan for transaction status |
| 404 errors | Clear .next folder, rebuild with npm run build |

---

## Support Resources

- [Sui Docs](https://docs.sui.io)
- [Sui Discord](https://discord.gg/sui)
- [Sui Scan Explorer](https://suiscan.xyz/testnet)
- [Next.js Docs](https://nextjs.org/docs)

---

## 🎉 Congratulations!

When all boxes are checked, you've successfully deployed **SuiClash** and made it playable for the public!

**Next Steps:**
1. Share with friends
2. Gather feedback
3. Plan Phase 2 features
4. Consider mainnet deployment

**Made with ❤️ for the Sui Community**
