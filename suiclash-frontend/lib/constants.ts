// Sui utility functions
export const SUI_DECIMAL = 9
export const MIST_PER_SUI = 1_000_000_000

export function formatSUI(amount: number | bigint): string {
  const num = typeof amount === 'bigint' ? Number(amount) : amount
  return (num / MIST_PER_SUI).toFixed(2)
}

export function toMist(sui: number): bigint {
  return BigInt(Math.floor(sui * MIST_PER_SUI))
}

// Contract constants
export const CONTRACTS = {
  PACKAGE_ID: process.env.NEXT_PUBLIC_PACKAGE_ID || '0x0',
  CLASH_TOKEN: process.env.NEXT_PUBLIC_CLASH_TOKEN_ID || '0x0',
  CLASH_CARD: process.env.NEXT_PUBLIC_CLASH_CARD_ID || '0x0',
  CLASH_ARENA: process.env.NEXT_PUBLIC_CLASH_ARENA_ID || '0x0',
  CLASH_MARKET: process.env.NEXT_PUBLIC_CLASH_MARKET_ID || '0x0',
}

// Game constants
export const GAME = {
  CARD_MINT_COST: 50_000_000_000, // 50 CLASH (9 decimals)
  BATTLE_ENTRY_FEE: 5_000_000_000, // 5 CLASH
  BATTLE_REWARD: 15_000_000_000, // 15 CLASH
  MIN_ATK: 10,
  MAX_ATK: 100,
  MIN_DEF: 10,
  MAX_DEF: 100,
  MAX_LEVEL: 10,
}

// Elements
export const ELEMENTS = {
  NEUTRAL: 0,
  FIRE: 1,
  WATER: 2,
  EARTH: 3,
}

export const ELEMENT_NAMES = {
  [ELEMENTS.NEUTRAL]: 'Neutral',
  [ELEMENTS.FIRE]: 'Fire 🔥',
  [ELEMENTS.WATER]: 'Water 💧',
  [ELEMENTS.EARTH]: 'Earth 🪨',
}

// Rarity
export const RARITY = {
  COMMON: 1,
  RARE: 2,
  EPIC: 3,
}

export const RARITY_NAMES = {
  [RARITY.COMMON]: 'Common',
  [RARITY.RARE]: 'Rare',
  [RARITY.EPIC]: 'Epic',
}

export const RARITY_COLORS = {
  [RARITY.COMMON]: 'badge-common',
  [RARITY.RARE]: 'badge-rare',
  [RARITY.EPIC]: 'badge-epic',
}
