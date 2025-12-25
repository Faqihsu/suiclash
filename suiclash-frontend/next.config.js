import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
    NEXT_PUBLIC_CLASH_CARD_ID: process.env.NEXT_PUBLIC_CLASH_CARD_ID || '0x0',
    NEXT_PUBLIC_CLASH_TOKEN_ID: process.env.NEXT_PUBLIC_CLASH_TOKEN_ID || '0x0',
    NEXT_PUBLIC_CLASH_ARENA_ID: process.env.NEXT_PUBLIC_CLASH_ARENA_ID || '0x0',
    NEXT_PUBLIC_CLASH_MARKET_ID: process.env.NEXT_PUBLIC_CLASH_MARKET_ID || '0x0',
  },
}

export default nextConfig
