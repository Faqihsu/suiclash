# 🎓 SuiClash - How to Play Guide

## Table of Contents
1. [Getting Started](#getting-started)
2. [Understanding Cards](#understanding-cards)
3. [Battling Guide](#battling-guide)
4. [Marketplace](#marketplace)
5. [Advanced Strategies](#advanced-strategies)

---

## Getting Started

### Step 1: Set Up Your Wallet
```
Required: Sui Wallet or compatible wallet
Network: Sui Testnet
```

**Installation:**
1. Install [Sui Wallet Chrome Extension](https://chromewebstore.google.com/detail/sui-wallet)
2. Create new wallet or import existing
3. **Important**: Switch to **Testnet** in settings
4. Visit [Sui Faucet](https://faucet.testnet.sui.io) to get test SUI

### Step 2: Connect to SuiClash
```
1. Open https://suiclash.vercel.app
2. Click "Connect Wallet"
3. Approve connection in wallet popup
4. You're ready to play!
```

### Step 3: Get $CLASH Tokens
```
1. Go to Wallet tab
2. Click "Claim Faucet"
3. Get 100 $CLASH instantly
4. Max 1x per 24 hours per address
```

---

## Understanding Cards

### Card Properties

#### 1. **Attack (ATK)**
- Range: 10 - 100
- Determines damage dealt in battle
- Higher ATK = stronger cards
- Cannot be changed manually

#### 2. **Defense (DEF)**
- Range: 10 - 100
- Reduces incoming damage
- Higher DEF = tankier cards
- Cannot be changed manually

#### 3. **Element**
- 🔥 **Fire** - Balanced offense/defense
- 💧 **Water** - Slightly defensive
- 🪨 **Earth** - Slightly offensive
- ⚪ **Neutral** - No advantage/disadvantage

**Element Advantage Table:**
```
FIRE    beats EARTH   (Fire burns earth)
EARTH   beats WATER   (Earth absorbs water)
WATER   beats FIRE    (Water extinguishes fire)
```

**Damage Multiplier:**
- Advantage: × 1.25 (25% bonus damage)
- Disadvantage: × 0.75 (25% less damage)
- Neutral vs Neutral: × 1.0 (no modifier)

#### 4. **Rarity**
| Rarity | Color | Stats | Appearance |
|--------|-------|-------|-----------|
| Common | Gray | Base stats | 60% drop rate |
| Rare | Blue | +20% stats | 30% drop rate |
| Epic | Gold | +40% stats | 10% drop rate |

**Stat Calculation:**
- Common: Base ATK/DEF range 10-100
- Rare: ATK/DEF range 12-120
- Epic: ATK/DEF range 14-140

#### 5. **Level**
- Range: 1 - 10
- Each level gained = +10% all stats
- Increases with battle wins
- XP: +1 per battle (win or lose)

**Level Progression:**
```
Level  XP Needed  ATK Boost   DEF Boost
1      0          +0%         +0%
2      10         +10%        +10%
3      20         +20%        +20%
...
10     90         +90%        +90%
```

### Card Minting

**Cost:** 50 $CLASH

**Process:**
```
1. Go to Cards tab
2. Click "Mint New Card"
3. Enter card name (1-30 characters)
4. Click "Mint"
5. Approve transaction in wallet
6. Wait 30-60s for blockchain confirmation
```

**Randomization:**
```
- ATK: Random 10-100
- DEF: Random 10-100
- Element: 25% each (Fire/Water/Earth/Neutral)
- Rarity: 60% Common, 30% Rare, 10% Epic
```

---

## Battling Guide

### How Battles Work

**Battle Format:** 1v1 Auto-Resolve
- **Duration:** Instant (no real-time gameplay)
- **Rounds:** 3-5 turns simulated
- **RNG:** Damage varies ±10% per turn
- **Winner:** Player whose card survives longer

### Starting a Battle

#### Option A: Create New Battle
```
1. Go to Battle tab
2. Click "Create Battle"
3. Select your card from list
4. Review: -5 $CLASH entry fee
5. Click "Create"
6. Wait for opponent to join (max 5 min timeout)
```

#### Option B: Join Existing Battle
```
1. Go to Battle tab
2. Browse "Open Battles" list
3. Read opponent's card stats
4. Click "Join" if interested
5. Select your defending card
6. Click "Confirm"
7. Battle auto-resolves immediately
```

### Battle Simulation

**Damage Formula:**
```
Base Damage = (Attacker ATK × Element Multiplier) - Defender DEF
Final Damage = max(1, Base Damage ± 10% random variation)

Example:
- Attacker: Fire 80 ATK
- Defender: Earth 40 DEF (disadvantage)
- Element Multiplier: 1.25x (Fire > Earth)
- Base: (80 × 1.25) - 40 = 100 - 40 = 60 damage
- Final: 60 ± 10% = 54-66 damage
```

**Battle Execution:**
```
Turn 1: Player A attacks
Turn 2: Player B attacks (if alive)
Turn 3: Player A attacks (if alive)
...continues until 1 player KO'd
```

**Example Battle:**
```
Card A: Fire 70 ATK, 50 DEF, Level 5
Card B: Water 60 ATK, 60 DEF, Level 3

Turn 1: A attacks B
  Damage = (70 × 0.75) - 60 = 52.5 - 60 = 0 (Water advantage blocks)
  
Turn 2: B attacks A
  Damage = (60 × 1.25) - 50 = 75 - 50 = 25
  A Health: 100 - 25 = 75

Turn 3: A attacks B
  Damage = (70 × 0.75) - 60 = 0

Turn 4: B attacks A
  Damage = 25
  A Health: 50

Turn 5: A attacks B
  Damage = 0

Turn 6: B attacks A
  Damage = 25
  A Health: 25

Turn 7: A attacks B
  Damage = 0

Turn 8: B attacks A
  Damage = 25
  A Health: 0 - WINNER: Card B!
```

### Rewards & Penalties

**Victory:**
- +15 $CLASH (reward pool)
- +1 XP on card (1 level per 10 XP)
- +1 to win counter

**Defeat:**
- -5 $CLASH (entry fee lost)
- +1 XP on card (participation)
- +1 to loss counter

---

## Marketplace

### Listing Your Card

**Steps:**
```
1. Go to Cards tab
2. Click card you want to sell
3. Click "List for Sale"
4. Set price in $CLASH (min 10)
5. Click "List"
6. Card moved to Marketplace
```

**Best Practices:**
- Epic cards: 200-500 $CLASH
- Rare cards: 100-200 $CLASH
- Common cards: 50-100 $CLASH
- Adjusted for level: +20% per level

### Buying Cards

**Steps:**
```
1. Go to Market tab
2. Browse cards or search
3. Filter by Rarity/Element
4. Click "Buy Now"
5. Confirm transaction
6. Card instantly transferred
```

**Tips:**
- Look for high DEF cards for defense strategy
- High ATK cards for offensive strategy
- Rare/Epic cards for long-term investment
- Check win rate in description

---

## Advanced Strategies

### Deck Building Strategy

**Balanced Deck (Recommended):**
```
- Card 1: High ATK (80+) Fire for offense
- Card 2: High DEF (80+) Earth for defense
- Card 3: Balanced (50/50) Water for flexibility
```

**Aggressive Deck:**
```
- Card 1: Fire 90+ ATK
- Card 2: Water 85+ ATK
- Card 3: Earth 80+ ATK
- Goal: Eliminate before taking damage
```

**Defensive Deck:**
```
- Card 1: Earth 90+ DEF
- Card 2: Water 85+ DEF
- Card 3: Fire 80+ DEF
- Goal: Outlast and wear down opponent
```

### Counter-Play

**vs Fire Cards:**
- Use Water element (-25% their damage)
- Build DEF to 70+
- Avoid Fire element matchups

**vs Water Cards:**
- Use Earth element (-25% their damage)
- Prioritize high ATK
- Use Fire if possible

**vs Earth Cards:**
- Use Fire element (-25% their damage)
- Pure DEF wall strat fails
- Use Water for balanced approach

### Leveling Strategy

**Fast Leveling:**
```
1. Play battles continuously
2. Win rate doesn't matter (1 XP per battle)
3. Focus on getting to Level 5+
4. Stats +50% bonus at Level 5
```

**Farming Method:**
```
- Create 10 cheap Common cards
- Battle each other (2 players minimum)
- Rotate through battles
- Efficient XP farming
```

### Economic Strategy

**Earning $CLASH:**
```
Method 1: Faucet Farming
  - Claim 100 $CLASH daily
  - Monthly = 3000 $CLASH
  - Risk: None

Method 2: Battle Grinding  
  - Need 50%+ win rate
  - Expected +10 $CLASH per battle (50% entry fee back)
  - Daily 10 battles = +100 $CLASH/day
  
Method 3: Market Flipping
  - Buy underpriced Rare/Epic
  - Level them to 5-10
  - Resell for 2-3x profit
  - Risk: Market price fluctuation
```

**Optimal Path for Beginners:**
```
Day 1: Faucet (100 CLASH) + Mint 2 cards (100 CLASH) = -0 CLASH
Day 2-5: Win battles, level cards, build collection
Week 2: Buy underpriced Rare from market
Week 3: Resell leveled Rare for profit
```

---

## Tips & Tricks

### Card Selection

✅ **DO:**
- Check element matchup before battle
- Select cards with defensive stats for passive battles
- Upgrade high-ATK cards to Level 5+
- Keep diverse element collection

❌ **DON'T:**
- Battle without checking opponent element
- Sell all your cards for quick CLASH
- Battle with level 1 cards (no stat bonus)
- Trust RNG (element advantage is key)

### Battle Planning

✅ **DO:**
- Create battles with trending popular cards
- Join battles with bad stat matchups (easy win)
- Build reputation with consistent wins
- Participate in community battles

❌ **DON'T:**
- Challenge obviously overpowered opponents
- Leave active battles (creates bad rep)
- Rush all your CLASH on one card
- Ignore element advantages

### Market Usage

✅ **DO:**
- Monitor card prices (price discovery)
- Sell duplicates for profit
- Buy gems at market bottom
- Build collection over time

❌ **DON'T:**
- Panic sell after losses
- Overprice commons/rares
- Buy at peak prices
- Hold only 1-2 cards

---

## FAQ

**Q: How often can I claim faucet?**
A: Once per 24 hours per wallet address

**Q: What's the max card level?**
A: Level 10 (requires 100 XP)

**Q: Can I delete cards?**
A: No, but you can sell them on market

**Q: What if battle times out?**
A: You get refund of entry fee after 5 minutes

**Q: Are battles truly 1v1?**
A: Yes, blockchain-verified, no bots

**Q: Can I trade cards with friends directly?**
A: Only through marketplace (to prevent fraud)

---

## Resources

- [Sui Wallet Setup](https://docs.sui.io/guides/user/getting-started)
- [Testnet Faucet](https://faucet.testnet.sui.io)
- [Sui Explorer](https://suiscan.xyz/testnet)
- [Official Discord](https://discord.gg/sui)

---

**Happy Gaming! May your cards be legendary! 🎮✨**
