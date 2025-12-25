'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Wallet, TrendingUp, Gift } from 'lucide-react'

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-purple-950/20 py-10">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-12">💰 Wallet & Balance</h1>

        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass glow-border p-8 rounded-2xl mb-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">💵</div>
            <div>
              <p className="text-gray-400 text-sm">$CLASH Balance</p>
              <p className="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                1,250
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <button className="btn-primary">Deposit $CLASH</button>
            <button className="btn-secondary">Withdraw</button>
          </div>
        </motion.div>

        {/* Faucet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass glow-border p-6 rounded-xl mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Testnet Faucet</h3>
              <p className="text-gray-400">Get free $CLASH tokens for testing (once per 24h)</p>
            </div>
            <button className="btn-primary flex items-center gap-2">
              <Gift size={20} /> Claim 100 $CLASH
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <h2 className="text-2xl font-bold mb-6">Statistics</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: '⚔️', label: 'Total Battles', value: '45', color: 'from-primary' },
            { icon: '🏆', label: 'Win Rate', value: '62%', color: 'from-accent' },
            { icon: '📈', label: 'Total Earned', value: '850 $CLASH', color: 'from-green-500' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass p-6 rounded-lg text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className={`text-2xl font-bold bg-gradient-to-r ${stat.color} to-transparent bg-clip-text text-transparent`}>
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transaction History */}
        <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
        <div className="glass p-6 rounded-lg">
          <div className="space-y-4">
            {[
              { type: 'Battle Win', amount: '+15 $CLASH', time: '2 hours ago', status: '✅' },
              { type: 'Card Purchase', amount: '-250 $CLASH', time: '4 hours ago', status: '✅' },
              { type: 'Faucet Claim', amount: '+100 $CLASH', time: '1 day ago', status: '✅' },
            ].map((tx, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                <div>
                  <p className="font-semibold">{tx.type}</p>
                  <p className="text-sm text-gray-400">{tx.time}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {tx.amount}
                  </p>
                  <p className="text-sm">{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
