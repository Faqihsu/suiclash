'use client'

import { useContext, createContext, ReactNode } from 'react'
import { useConnectWallet, useAccount, useSignAndExecuteTransaction } from '@suiet/wallet-kit'

interface WalletContextType {
  isConnected: boolean
  address: string | null
  connect: () => void
  disconnect: () => void
}

export const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const { connected, address } = useAccount()
  const { mutate: connectWallet } = useConnectWallet()

  return (
    <WalletContext.Provider
      value={{
        isConnected: connected,
        address: address || null,
        connect: () => connectWallet(),
        disconnect: () => {},
      }}
    >
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

# Hook untuk battle transactions
export function useClashContracts() {
  const { signAndExecuteTransaction } = useSignAndExecuteTransaction()
  const { address } = useAccount()

  return {
    mintCard: async (name: string, atk: number, def: number, element: number, rarity: number) => {
      // Implementation untuk mint card
      console.log('Mint card:', { name, atk, def, element, rarity })
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
