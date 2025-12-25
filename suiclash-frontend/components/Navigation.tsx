'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

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

          {/* Wallet Button */}
          <button className="btn-primary hidden md:block">Connect Wallet</button>

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
            <button className="w-full btn-primary mt-4">Connect Wallet</button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
