'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { connectSuiWallet, getCurrentAccount, isSuiWalletAvailable, isSuiWalletAvailableAsync } from '@/lib/wallet-safe'
import { useGameStore } from '@/lib/store'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [connecting, setConnecting] = useState(false)
  const [suiAvailable, setSuiAvailable] = useState(false)
  const [checkingWallet, setCheckingWallet] = useState(true)

  const { setWalletAddress: setStoreAddress } = useGameStore()

  // Check if Sui wallet is available on mount with retry
  useEffect(() => {
    const checkWallet = async () => {
      setCheckingWallet(true)
      
      // Try immediate check first
      if (isSuiWalletAvailable()) {
        setSuiAvailable(true)
        setCheckingWallet(false)
        checkCurrentAccount()
        return
      }
      
      // If not found immediately, retry with delays
      const available = await isSuiWalletAvailableAsync()
      setSuiAvailable(available)
      
      if (available) {
        console.log('✅ Sui Wallet detected after retry')
        checkCurrentAccount()
      } else {
        console.log('⚠️ Sui Wallet not detected - user should install extension')
      }
      
      setCheckingWallet(false)
    }
    
    checkWallet()
  }, [])

  async function checkCurrentAccount() {
    try {
      const result = await getCurrentAccount()
      if (result.address) {
        setWalletAddress(result.address)
        setWalletConnected(true)
        setStoreAddress(result.address)
      }
    } catch (error) {
      console.error('Error checking account:', error)
    }
  }

  async function handleConnect() {
    setConnecting(true)
    try {
      const result = await connectSuiWallet()
      
      if (result.success) {
        setWalletAddress(result.address)
        setWalletConnected(true)
        setStoreAddress(result.address)
        alert('✅ Connected to Sui Wallet!')
      } else {
        alert(`❌ Connection failed: ${result.message}`)
      }
    } catch (error: any) {
      alert(`❌ Error: ${error.message}`)
    } finally {
      setConnecting(false)
    }
  }

  function handleDisconnect() {
    setWalletAddress(null)
    setWalletConnected(false)
    setStoreAddress(null)
    alert('Disconnected from wallet')
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const tabs = [
    { href: '/', label: '🏠 Home', icon: 'home' },
    { href: '/cards', label: '🔥 Cards', icon: 'cards' },
    { href: '/battle', label: '⚔️ Battle', icon: 'battle' },
    { href: '/market', label: '🏪 Market', icon: 'market' },
    { href: '/wallet', label: '💰 Wallet', icon: 'wallet' },
  ]

  return (
    <nav className="sticky top-0 z-40 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ⚔️ SuiClash
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10 active:bg-primary"
              >
                {tab.label}
              </Link>
            ))}
          </div>

          {/* Wallet Info / Connect Button */}
          <div className="hidden md:flex items-center gap-3">
            {walletConnected && walletAddress && (
              <div className="flex items-center gap-3 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                <span className="text-sm text-green-400">✅ Connected</span>
                <div className="h-6 w-px bg-white/20" />
                <span className="text-sm font-mono text-green-300">{formatAddress(walletAddress)}</span>
              </div>
            )}
            
            {!walletConnected && (
              <div className="text-xs text-gray-400 px-2 py-1">
                {checkingWallet 
                  ? '⏳ Checking wallet...' 
                  : suiAvailable 
                    ? '✅ Sui Wallet ready' 
                    : '⚠️ Install Sui Wallet'}
              </div>
            )}

            <button
              onClick={walletConnected ? handleDisconnect : handleConnect}
              disabled={connecting || checkingWallet || (!walletConnected && !suiAvailable)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                walletConnected
                  ? 'bg-red-500/20 hover:bg-red-500/30 text-red-300'
                  : 'btn-primary disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              {connecting ? 'Connecting...' : walletConnected ? 'Disconnect' : 'Connect Wallet'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-all"
              >
                {tab.label}
              </Link>
            ))}
            
            {walletConnected && walletAddress && (
              <div className="px-4 py-2 text-sm border-t border-white/10 mt-2 bg-green-500/10 rounded">
                <p className="text-green-400 text-xs mb-1">Connected Wallet</p>
                <p className="font-mono text-green-300">{formatAddress(walletAddress)}</p>
              </div>
            )}

            <button
              onClick={walletConnected ? handleDisconnect : handleConnect}
              disabled={connecting || (!walletConnected && !suiAvailable)}
              className={`w-full mt-4 px-4 py-2 rounded-lg font-semibold transition-all ${
                walletConnected
                  ? 'bg-red-500/20 text-red-300'
                  : 'btn-primary disabled:opacity-50'
              }`}
            >
              {connecting ? 'Connecting...' : walletConnected ? 'Disconnect' : 'Connect Wallet'}
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
