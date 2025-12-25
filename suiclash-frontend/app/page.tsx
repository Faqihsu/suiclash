'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 py-32 text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"> SuiClash</h1>
          <p className="text-2xl text-purple-200 mb-8">NFT Card Battle Game on Sui Testnet</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="text-3xl font-bold text-cyan-400">4</div>
              <div className="text-sm text-gray-400">Smart Contracts</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400">5</div>
              <div className="text-sm text-gray-400">Game Pages</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-purple-500/20">
              <div className="text-3xl font-bold text-cyan-400">0</div>
              <div className="text-sm text-gray-400">Errors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Features</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20">
            <div className="text-2xl mb-2"></div>
            <h3 className="text-lg font-bold text-white mb-2">Collect Cards</h3>
            <p className="text-gray-400">Mint and collect unique NFT cards</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20">
            <div className="text-2xl mb-2"></div>
            <h3 className="text-lg font-bold text-white mb-2">Battle</h3>
            <p className="text-gray-400">1v1 battles with instant settlement</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20">
            <div className="text-2xl mb-2"></div>
            <h3 className="text-lg font-bold text-white mb-2">Trade</h3>
            <p className="text-gray-400">P2P marketplace for card trading</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-purple-500/20">
            <div className="text-2xl mb-2"></div>
            <h3 className="text-lg font-bold text-white mb-2">Earn</h3>
            <p className="text-gray-400">Win battles to earn \ tokens</p>
          </div>
        </div>
      </div>
    </div>
  )
}
