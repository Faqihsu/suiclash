# SuiClash Frontend - Next.js 14
# Modern 2025 NFT Card Battle Game UI

## Quick Setup

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and update:
```
NEXT_PUBLIC_PACKAGE_ID=<your_package_id>
NEXT_PUBLIC_CLASH_CARD_ID=<your_card_id>
NEXT_PUBLIC_CLASH_TOKEN_ID=<your_token_id>
NEXT_PUBLIC_CLASH_ARENA_ID=<your_arena_id>
NEXT_PUBLIC_CLASH_MARKET_ID=<your_market_id>
```

## Project Structure

```
├── app/
│   ├── page.tsx           # Home page
│   ├── cards/
│   │   └── page.tsx       # My Cards
│   ├── battle/
│   │   └── page.tsx       # Battle Arena
│   ├── market/
│   │   └── page.tsx       # Marketplace
│   ├── wallet/
│   │   └── page.tsx       # Wallet & Balance
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── providers.tsx      # Providers setup
├── components/
│   ├── Header.tsx
│   ├── Navigation.tsx
│   ├── CardGrid.tsx
│   ├── BattleCard.tsx
│   ├── Modal.tsx
│   └── ...
├── lib/
│   ├── constants.ts
│   ├── utils.ts
│   └── contracts.ts
├── hooks/
│   ├── useSuiContracts.ts
│   ├── useWallet.ts
│   └── ...
├── public/
│   └── (assets)
└── tailwind.config.ts
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Wallet**: @mysten/wallet-kit
- **Blockchain**: Sui SDK
- **UI Components**: shadcn/ui
- **Notifications**: Sonner
- **State**: Zustand

## Development

```bash
# Dev server
npm run dev

# Build
npm run build

# Start production
npm start

# Type check
npm run type-check
```

## Features

✅ 5-Tab Dashboard
✅ Wallet Connection
✅ Card Minting
✅ Battle System
✅ Marketplace
✅ Real-time Updates
✅ Dark Mode
✅ Mobile Responsive
✅ Animations
✅ Toast Notifications

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

---

**Built for Sui Testnet** | Deploy at [suiclash.io](https://suiclash.io)
