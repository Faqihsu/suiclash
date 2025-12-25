'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Plus, Zap } from 'lucide-react'

export default function CardsPage() {
  const [activeRarity, setActiveRarity] = useState('all')

  // Mock cards data
  const cards = [
    { id: 1, name: 'Inferno Drake', element: '🔥 Fire', atk: 75, def: 45, rarity: 'epic', level: 5, wins: 12 },
    { id: 2, name: 'Aqua Sentinel', element: '💧 Water', atk: 50, def: 60, rarity: 'rare', level: 3, wins: 8 },
    { id: 3, name: 'Stone Golem', element: '🪨 Earth', atk: 45, def: 75, rarity: 'rare', level: 4, wins: 10 },
    { id: 4, name: 'Sky Bird', element: '⚡ Neutral', atk: 55, def: 55, rarity: 'common', level: 2, wins: 5 },
  ]

  const filteredCards = activeRarity === 'all' 
    ? cards 
    : cards.filter(c => c.rarity === activeRarity)

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'common': return 'badge-common'
      case 'rare': return 'badge-rare'
      case 'epic': return 'badge-epic'
      default: return 'badge-common'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-purple-950/20 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">🔥 My Cards</h1>
            <p className="text-gray-400">You have <span className="text-primary font-bold">{cards.length}</span> cards</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} /> Mint New Card
          </button>
        </div>

        {/* Filters */}
        <div className="glass p-4 rounded-lg mb-8 flex gap-3 flex-wrap">
          {['all', 'common', 'rare', 'epic'].map(rarity => (
            <button
              key={rarity}
              onClick={() => setActiveRarity(rarity)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeRarity === rarity
                  ? 'bg-primary text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredCards.map((card, i) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass glow-border p-6 rounded-xl group cursor-pointer"
            >
              <div className="mb-4">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {card.element.split(' ')[0]}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getRarityColor(card.rarity)}`}>
                  {card.rarity.toUpperCase()}
                </div>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">⚔️ Attack</span>
                  <span className="font-bold text-accent">{card.atk}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">🛡️ Defense</span>
                  <span className="font-bold text-primary">{card.def}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">📊 Level</span>
                  <span className="font-bold text-yellow-400">{card.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">🏆 Wins</span>
                  <span className="font-bold text-green-400">{card.wins}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 btn-secondary text-sm">Battle</button>
                <button className="flex-1 btn-secondary text-sm">Sell</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredCards.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No cards found. Mint your first card!</p>
          </div>
        )}
      </div>
    </div>
  )
}
