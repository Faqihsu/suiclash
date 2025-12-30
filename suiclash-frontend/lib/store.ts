import { create, SetState } from 'zustand'

export interface GameCard {
  id: string
  name: string
  element: number
  atk: number
  def: number
  rarity: 'common' | 'rare' | 'epic'
  level: number
  wins: number
  owner: string
}

export interface Battle {
  id: string
  player_a: string
  player_b: string | null
  card_a: string
  card_b: string | null
  status: 'waiting' | 'active' | 'resolved'
  winner: string | null
  reward: number
  created_at: number
}

export interface GameState {
  // Wallet
  walletAddress: string | null
  balance: bigint
  setWalletAddress: (address: string | null) => void
  setBalance: (balance: bigint) => void

  // Cards
  cards: GameCard[]
  setCards: (cards: GameCard[]) => void
  addCard: (card: GameCard) => void

  // Battles
  battles: Battle[]
  setBattles: (battles: Battle[]) => void
  addBattle: (battle: Battle) => void

  // UI
  loading: boolean
  setLoading: (loading: boolean) => void
  error: string | null
  setError: (error: string | null) => void
}

export const useGameStore = create<GameState>((set: SetState<GameState>) => ({
  // Wallet
  walletAddress: null,
  balance: 0n,
  setWalletAddress: (address: string | null) => set({ walletAddress: address }),
  setBalance: (balance: bigint) => set({ balance }),

  // Cards
  cards: [],
  setCards: (cards: GameCard[]) => set({ cards }),
  addCard: (card: GameCard) => set((state: GameState) => ({ cards: [...state.cards, card] })),

  // Battles
  battles: [],
  setBattles: (battles: Battle[]) => set({ battles }),
  addBattle: (battle: Battle) => set((state: GameState) => ({ battles: [...state.battles, battle] })),

  // UI
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  error: null,
  setError: (error: string | null) => set({ error }),
}))
