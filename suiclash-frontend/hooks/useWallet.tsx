'use client'

import { useContext, createContext, ReactNode, useState } from 'react'

interface WalletContextType {
  isConnected: boolean
  address: string | null
  connect: () => void
  disconnect: () => void
}

export const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  const connect = async () => {
    // Placeholder for wallet connection logic
    // Will be implemented when @suiet/wallet-kit is available
    setIsConnected(true)
    setAddress('0x123...abc')
  }

  const disconnect = () => {
    setIsConnected(false)
    setAddress(null)
  }

  const value: WalletContextType = {
    isConnected,
    address,
    connect,
    disconnect,
  }

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error('useWallet must be used within WalletProvider')
  }
  return context
}

// Hook untuk blockchain interactions
export function useClashContracts() {
  return {
    mintCard: async (name: string, atk: number, def: number, element: number, rarity: number) => {
      // Implementation akan diisi ketika @suiet/wallet-kit tersedia
      console.log('Mint card:', { name, atk, def, element, rarity })
    },
    battle: async (cardId: string, opponentCardId: string) => {
      // Implementation
      console.log('Battle:', { cardId, opponentCardId })
    },
    tradeCard: async (cardId: string, price: number) => {
      // Implementation
      console.log('Trade card:', { cardId, price })
    },
    createBattle: async (cardId: string, entryFee: bigint) => {
      // Implementation untuk create battle
      console.log('Create battle:', { cardId, entryFee })
    },
    joinBattle: async (battleId: string, cardId: string, entryFee: bigint) => {
      // Implementation untuk join battle
      console.log('Join battle:', { battleId, cardId, entryFee })
    },
  }
}
