/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_PACKAGE_ID: process.env.NEXT_PUBLIC_PACKAGE_ID || '0x0',
    NEXT_PUBLIC_NETWORK_RPC: process.env.NEXT_PUBLIC_NETWORK_RPC || 'https://fullnode.testnet.sui.io:443',
    NEXT_PUBLIC_NETWORK: process.env.NEXT_PUBLIC_NETWORK || 'testnet',
  },
}

module.exports = nextConfig
