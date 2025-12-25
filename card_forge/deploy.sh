#!/bin/bash
# SuiClash Deployment Script
# Deploys smart contracts to Sui Testnet

set -e

echo "🚀 SuiClash Deployment Script"
echo "=============================="
echo ""

# Check prerequisites
if ! command -v sui &> /dev/null; then
    echo "❌ Sui CLI not found. Please install: https://docs.sui.io/guides/developer/getting-started"
    exit 1
fi

# Switch to testnet
echo "📡 Switching to Sui Testnet..."
sui client switch testnet

# Get testnet SUI if needed
echo ""
echo "🪙 Getting testnet SUI (faucet)..."
sui client faucet || true

# Build contracts
echo ""
echo "🔨 Building Move contracts..."
sui move build

# Publish contracts
echo ""
echo "📦 Publishing contracts to testnet..."
PUBLISH_OUTPUT=$(sui client publish --gas-budget 2000000000)

echo ""
echo "✅ Deployment Output:"
echo "$PUBLISH_OUTPUT"

# Extract package IDs
PACKAGE_ID=$(echo "$PUBLISH_OUTPUT" | grep -oP '(?<=Package ID: )0x[a-f0-9]+' | head -1)

echo ""
echo "🎉 Deployment Complete!"
echo "========================"
echo ""
echo "📋 Add these to your .env.local:"
echo ""
echo "NEXT_PUBLIC_PACKAGE_ID=$PACKAGE_ID"
echo "NEXT_PUBLIC_CLASH_CARD_ID=$PACKAGE_ID"
echo "NEXT_PUBLIC_CLASH_TOKEN_ID=$PACKAGE_ID"
echo "NEXT_PUBLIC_CLASH_ARENA_ID=$PACKAGE_ID"
echo "NEXT_PUBLIC_CLASH_MARKET_ID=$PACKAGE_ID"
echo ""
echo "Then run: cd frontend && npm install && npm run dev"
