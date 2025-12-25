# 🧪 SuiClash - Complete Testing & Deployment Guide

**Status:** Ready to Execute  
**Date:** December 25, 2025

---

## 🚀 STEP 1: DEPLOY SMART CONTRACTS TO SUI TESTNET

### Prerequisites Check
```bash
# Verify installations
sui --version
# Should show: Sui CLI version...

node --version
# Should show: v18+

npm --version
# Should show: 8+
```

### Step 1.1: Build Contracts
```bash
# Navigate to contract folder
cd c:\Users\Perhutani\card_forge

# Build the Move project
sui move build

# Expected output:
# [+] Building suiclash...
# [✓] Build successful
# [✓] 0 warnings
```

### Step 1.2: Setup Wallet
```bash
# Switch to Testnet
sui client switch --testnet

# Check active address
sui client active-address
# Should output: 0x[your address]

# Get testnet SUI from faucet
sui client faucet
# Expected: 1 SUI received

# Verify balance
sui client gas --json
# Should show balance > 0
```

### Step 1.3: Publish Contracts
```bash
# This is the critical step!
sui client publish --gas-budget 2000000000

# This will output something like:
# ╭─────────────────────────────────────────────────────────────╮
# │ Transaction Digest: 0x1234567890abcdef...                  │
# │ Status: Success                                             │
# │                                                             │
# │ Published Objects:                                          │
# │ - ID: 0xabcdef1234567890... (clash_token)                 │
# │ - ID: 0x1234567890abcdef... (clash_card)                  │
# │ - ID: 0x567890abcdef1234... (clash_arena)                 │
# │ - ID: 0xabcdef1234567890... (clash_market)                │
# │                                                             │
# │ Package ID: 0x1111222233334444555566667777888899990000  ← SAVE THIS!
# ╰─────────────────────────────────────────────────────────────╯
```

### ✅ Step 1.4: Verify Deployment
```bash
# Check Package ID was created
sui client object 0x[YOUR_PACKAGE_ID]

# Check Sui Scan (web)
# Open: https://suiscan.xyz/testnet/object/0x[YOUR_PACKAGE_ID]
# You should see all 4 modules listed
```

### 📝 SAVE YOUR PACKAGE ID
```
Create a file: c:\Users\Perhutani\DEPLOYMENT_INFO.txt

Content:
═══════════════════════════════════════════════════════════
SUI CLASH - DEPLOYMENT INFO
═══════════════════════════════════════════════════════════

Deployment Date: [TODAY'S DATE]
Network: Sui Testnet
Deployer Address: 0x[YOUR ADDRESS]

PACKAGE ID: 0x[COPY YOUR PACKAGE ID HERE]
TRANSACTION DIGEST: 0x[COPY DIGEST HERE]

✅ Contracts Deployed Successfully!

Verify at:
https://suiscan.xyz/testnet/object/0x[YOUR_PACKAGE_ID]

═══════════════════════════════════════════════════════════
```

---

## 🌐 STEP 2: DEPLOY FRONTEND TO VERCEL

### Step 2.1: Initialize Git & Push to GitHub

```bash
# Navigate to project root
cd c:\Users\Perhutani

# Initialize git (if not already done)
git init
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Create .gitignore (already created)
# Add and commit all files
git add .
git commit -m "Initial SuiClash commit - Production ready"

# Create GitHub repository
# 1. Go to https://github.com/new
# 2. Create repo: "suiclash"
# 3. Do NOT initialize with README (we already have files)
# 4. Copy the commands shown

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/suiclash.git
git branch -M main
git push -u origin main

# Verify push was successful
git log --oneline
# Should show your commit
```

### Step 2.2: Connect Vercel

```bash
# Login to Vercel
# 1. Open https://vercel.com/login
# 2. Click "Continue with GitHub"
# 3. Authorize Vercel to access your repos
```

### Step 2.3: Create Vercel Project

**Via Vercel Dashboard:**
```
1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Search for "suiclash" repo
4. Click "Import"
5. Configure:
   
   Framework: Next.js
   Root Directory: ./suiclash-frontend
   Build Command: npm run build
   Output Directory: .next
   
6. Click "Environment Variables" and add:
```

**Environment Variables to Add:**
```
NEXT_PUBLIC_PACKAGE_ID = 0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_CLASH_TOKEN_ID = 0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_CLASH_CARD_ID = 0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_CLASH_ARENA_ID = 0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_CLASH_MARKET_ID = 0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_NETWORK = testnet
```

**Complete Deployment:**
```
7. Click "Deploy"
8. Wait for build to complete (5-10 minutes)
9. You'll see: "Congratulations! Your project is live"
10. Click the preview link or visit:
    https://suiclash.vercel.app
```

### ✅ Step 2.4: Verify Frontend Deployment

```
Checklist:
☐ Website loads at https://suiclash.vercel.app
☐ Home page shows with hero section
☐ Navigation menu visible with 5 tabs
☐ No 404 or error pages
☐ Mobile responsive (test on phone/tablet)
☐ Dark theme displays correctly
☐ Images/fonts load correctly
```

---

## 🧪 STEP 3: LOCAL TESTING

### Step 3.1: Setup Local Environment

```bash
# Navigate to frontend
cd c:\Users\Perhutani\suiclash-frontend

# Install dependencies (first time only)
npm install

# This should complete with:
# added XXX packages, audited XXX packages in XXXs
# [number] vulnerabilities (some may be from dev dependencies)
```

### Step 3.2: Create Local Environment File

```bash
# Create .env.local file
# Content:
NEXT_PUBLIC_PACKAGE_ID=0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_CLASH_TOKEN_ID=0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_CLASH_CARD_ID=0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_CLASH_ARENA_ID=0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_CLASH_MARKET_ID=0x[YOUR_PACKAGE_ID]
NEXT_PUBLIC_NETWORK=testnet
```

### Step 3.3: Start Dev Server

```bash
# Start Next.js development server
npm run dev

# Expected output:
# ▲ Next.js 14.0.0
# - Local:        http://localhost:3000
# - Environments: .env.local
#
# ✓ Ready in 2.5s
```

### ✅ Step 3.4: Test Each Page

**Open http://localhost:3000**

#### Test Home Page (/)
```
Visual Checklist:
☐ Hero section visible
☐ "Connect Wallet" button present
☐ Features cards display (3 cards)
☐ Stats section shows
☐ CTA button visible
☐ Footer present
☐ No layout shifts
☐ Animations smooth
```

#### Test Cards Page (/cards)
```
Functional Checklist:
☐ Page loads without error
☐ Cards grid displays
☐ Rarity filters work (click each)
☐ Cards show: name, ATK, DEF, level
☐ Card stats are visible
☐ "Mint Card" button appears
☐ Responsive on mobile
☐ Scroll smooth
```

#### Test Battle Page (/battle)
```
Functional Checklist:
☐ Battle list displays
☐ Battle status shows correctly
☐ "Create Battle" button works
☐ "Join Battle" buttons present
☐ Battle cards visible with stats
☐ Responsive layout
☐ Hover effects work
☐ No console errors
```

#### Test Market Page (/market)
```
Functional Checklist:
☐ Market listings display
☐ Search bar functional
☐ Filter buttons work (by rarity)
☐ Cards show with prices
☐ "Buy Now" buttons present
☐ Prices displayed correctly
☐ Responsive on mobile
☐ Smooth pagination (if added)
```

#### Test Wallet Page (/wallet)
```
Functional Checklist:
☐ Balance display shows
☐ Faucet button visible
☐ Stats section displays
☐ Transaction history shows
☐ Wallet info layout correct
☐ Responsive design
☐ Color scheme consistent
☐ No missing icons
```

### Step 3.5: Test Wallet Connection

```
Wallet Integration Test:
1. Have Sui Wallet Extension installed
2. Click "Connect Wallet" button
3. Extension popup should appear
4. Select address to connect
5. Button should change to show address
6. No errors in browser console
7. Wallet state persists on refresh

Expected console: No errors
Expected behavior: Seamless connection
```

### Step 3.6: Console Error Check

```bash
# Open DevTools: F12
# Click "Console" tab
# Expected: No red errors
# Warning about missing .env is OK
# Check Network tab: All resources load (200 status)
```

### Step 3.7: Build Test

```bash
# Test production build
npm run build

# Expected output:
# ▲ Next.js 14.0.0
# ✓ Linting and checking validity of types
# ✓ Collecting page data
# ✓ Generating static pages (XXX/XXX)
# ✓ Finalizing page optimization
# Route (pages)                              Size
# ○ (Static) / renders as static HTML
# ○ (SSG)    /cards renders as static HTML
# ... [all pages listed]
# ✓ Export complete. Exported to .next
```

### Step 3.8: Performance Check

```bash
# Lighthouse audit (in Chrome DevTools)
1. Press F12
2. Open "Lighthouse" tab
3. Click "Generate report"
4. Expected scores:
   - Performance: 80+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+
```

---

## ✅ TESTING CHECKLIST SUMMARY

### Smart Contracts
- [ ] `sui move build` succeeds
- [ ] No compilation warnings
- [ ] `sui client publish` succeeds
- [ ] Package ID received
- [ ] Package visible on Sui Scan
- [ ] All 4 modules listed

### Frontend Build
- [ ] `npm install` completes
- [ ] `.env.local` created with Package ID
- [ ] `npm run dev` starts successfully
- [ ] Page loads at `http://localhost:3000`
- [ ] `npm run build` completes with 0 errors

### Frontend Functionality
- [ ] All 5 pages load (/, /cards, /battle, /market, /wallet)
- [ ] Navigation works
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Animations smooth (60fps)
- [ ] Wallet button appears

### Vercel Deployment
- [ ] Deployed successfully
- [ ] Live at `https://suiclash.vercel.app`
- [ ] All pages accessible
- [ ] Environment variables set
- [ ] No build errors
- [ ] Performance acceptable

### Game Flow (After Wallet Integration)
- [ ] Connect wallet
- [ ] View balance
- [ ] Claim faucet (when implemented)
- [ ] Mint card (when implemented)
- [ ] Create/join battle (when implemented)
- [ ] View marketplace (when implemented)

---

## 🎯 SUCCESS CRITERIA

All tests pass = ✅ Ready for Phase 1 Launch!

**Phase 1 Launch Checklist:**
```
✅ Smart contracts deployed to Sui Testnet
✅ Frontend deployed on Vercel
✅ All pages load without errors
✅ No console warnings/errors
✅ Wallet integration setup complete
✅ Documentation complete
✅ Ready for community testing
```

---

## 🚨 TROUBLESHOOTING

### Contract Deployment Issues

**Error: "address with no value"**
```
Solution: Update Move.toml with correct package address
```

**Error: "insufficient gas"**
```
Solution: Get more testnet SUI from faucet
sui client faucet
```

**Error: "package not found"**
```
Solution: Ensure sui move build completes first
```

### Frontend Issues

**Error: "Cannot find module '@suiet/wallet-kit'"**
```
Solution: npm install
```

**Error: ".env.local variables undefined"**
```
Solution: 
1. Create .env.local file
2. Add all NEXT_PUBLIC_* variables
3. Restart dev server
```

**Error: "Port 3000 already in use"**
```
Solution: Kill existing process or use different port
npm run dev -- -p 3001
```

---

## 📞 NEXT STEPS AFTER TESTING

1. ✅ All tests pass
2. 🎉 **PHASE 1 IS LIVE!**
3. 📢 Share with community
4. 🐛 Gather bug reports
5. 🔧 Fix any issues
6. 🚀 Start Phase 2 development

---

**You're almost there! Let's make SuiClash LIVE! ⚔️🚀**

---

*Last Updated: December 25, 2025*  
*Ready to Deploy!*
