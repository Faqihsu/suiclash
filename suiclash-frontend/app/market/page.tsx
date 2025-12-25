'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, ShoppingCart } from 'lucide-react'

export default function MarketPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRarity, setSelectedRarity] = useState('all')

  const listings = [
    { id: 1, name: 'Inferno Dragon', element: '🔥', rarity: 'epic', atk: 85, def: 50, price: 500, seller: '0x123' },
    { id: 2, name: 'Water Mage', element: '💧', rarity: 'rare', atk: 60, def: 70, price: 250, seller: '0x456' },
    { id: 3, name: 'Stone Knight', element: '🪨', rarity: 'rare', atk: 55, def: 75, price: 200, seller: '0x789' },
    { id: 4, name: 'Sky Spirit', element: '⚡', rarity: 'common', atk: 40, def: 40, price: 100, seller: '0xabc' },
  ]

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'common': return 'badge-common'
      case 'rare': return 'badge-rare'
      case 'epic': return 'badge-epic'
      default: return 'badge-common'
    }
  }

  const filtered = listings.filter(card => {
    const matchRarity = selectedRarity === 'all' || card.rarity === selectedRarity
    const matchSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchRarity && matchSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-purple-950/20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">🏪 Marketplace</h1>
          <p className="text-gray-400">{listings.length} cards available</p>
        </div>

        {/* Filters */}
        <div className="glass p-6 rounded-lg mb-8 space-y-4">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search cards..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {['all', 'common', 'rare', 'epic'].map(rarity => (
                <button
                  key={rarity}
                  onClick={() => setSelectedRarity(rarity)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedRarity === rarity
                      ? 'bg-primary text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Listings Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.map((card, i) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass glow-border p-5 rounded-xl"
            >
              <div className="mb-4">
                <div className="text-4xl mb-2">{card.element}</div>
                <h3 className="text-lg font-bold mb-2">{card.name}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getRarityColor(card.rarity)}`}>
                  {card.rarity.toUpperCase()}
                </div>
              </div>

              <div className="space-y-1 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">ATK</span>
                  <span className="font-bold">{card.atk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">DEF</span>
                  <span className="font-bold">{card.def}</span>
                </div>
                <div className="flex justify-between font-bold text-accent pt-2 border-t border-white/10">
                  <span>Price</span>
                  <span>{card.price} $CLASH</span>
                </div>
              </div>

              <button className="w-full btn-primary flex items-center justify-center gap-2">
                <ShoppingCart size={16} /> Buy Now
              </button>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No cards found</p>
          </div>
        )}
      </div>
    </div>
  )
}
