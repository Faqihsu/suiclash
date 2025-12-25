'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swords, Plus, Clock } from 'lucide-react'

export default function BattlePage() {
  const [activeBattles, setActiveBattles] = useState([
    {
      id: 1,
      player_a: '0x123...abc',
      card_a: 'Inferno Drake',
      status: 'waiting',
      created: 120,
    },
    {
      id: 2,
      player_a: '0x456...def',
      card_a: 'Ice Witch',
      status: 'resolved',
      winner: 'Player A',
      created: 300,
    },
  ])

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-purple-950/20 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">⚔️ Battle Arena</h1>
            <p className="text-gray-400">5 $CLASH entry fee • 15 $CLASH winner reward</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} /> Create Battle
          </button>
        </div>

        {/* Active Battles */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Active Battles</h2>
          
          {activeBattles.map((battle, i) => (
            <motion.div
              key={battle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass glow-border p-6 rounded-xl"
            >
              <div className="flex items-center justify-between flex-wrap gap-6">
                {/* Player A */}
                <div className="flex-1 min-w-40">
                  <div className="text-sm text-gray-400 mb-2">Player A</div>
                  <div className="font-mono text-sm mb-2">{battle.player_a}</div>
                  <div className="text-lg font-bold">{battle.card_a}</div>
                </div>

                {/* VS */}
                <div className="flex flex-col items-center gap-2">
                  <div className="text-2xl">⚔️</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={12} />
                    {Math.floor(battle.created / 60)}m
                  </div>
                </div>

                {/* Status */}
                <div className="flex-1 min-w-40 text-right">
                  <div className="text-sm text-gray-400 mb-2">
                    Status: {battle.status === 'waiting' ? '⏳ Waiting for Player B' : '✅ Resolved'}
                  </div>
                  {battle.status === 'resolved' && (
                    <div className="text-green-400 font-bold mb-2">Winner: {battle.winner}</div>
                  )}
                  <button className={battle.status === 'waiting' ? 'btn-primary' : 'btn-secondary'}>
                    {battle.status === 'waiting' ? 'Join Battle' : 'View Result'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Battle History */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Your Battle History</h2>
          <div className="glass p-6 rounded-lg">
            <div className="text-center py-12 text-gray-400">
              No battles yet. Create your first battle!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
