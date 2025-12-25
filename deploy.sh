#!/bin/bash

# SuiClash Deployment Script (macOS/Linux)
# This script automates the entire deployment process

set -e # Exit on error

echo "🚀 SuiClash - Automated Deployment Script"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "\n${BLUE}==== $1 ====${NC}\n"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Step 1: Check Prerequisites
print_header "Step 1: Checking Prerequisites"

if ! command -v sui &> /dev/null; then
    print_error "Sui CLI not found. Install from: https://docs.sui.io/guides/developer/getting-started/sui-install"
    exit 1
fi
print_success "Sui CLI found"

if ! command -v node &> /dev/null; then
    print_error "Node.js not found. Install from: https://nodejs.org"
    exit 1
fi
print_success "Node.js found (v$(node -v))"

if ! command -v npm &> /dev/null; then
    print_error "npm not found"
    exit 1
fi
print_success "npm found (v$(npm -v))"

# Step 2: Setup Wallet
print_header "Step 2: Setting Up Wallet"

echo "Checking Sui wallet configuration..."
if ! sui client active-address &> /dev/null; then
    print_warning "No active Sui address. Creating new address..."
    sui client new
fi

ACTIVE_ADDRESS=$(sui client active-address)
print_success "Active address: $ACTIVE_ADDRESS"

echo "Ensuring you're on Testnet..."
sui client switch --testnet
print_success "Switched to Testnet"

# Step 3: Request Testnet SUI
print_header "Step 3: Getting Testnet SUI"

echo "Requesting testnet SUI from faucet..."
sui client faucet
print_success "Testnet SUI requested"

echo "Checking balance..."
sleep 5
BALANCE=$(sui client gas --json | jq '.[0].gasCoin.balance' 2>/dev/null || echo "0")
if [ "$BALANCE" -gt 0 ]; then
    print_success "Balance confirmed: $BALANCE MIST"
else
    print_warning "Balance may take a moment to confirm. Check with: sui client gas"
fi

# Step 4: Deploy Smart Contracts
print_header "Step 4: Deploying Smart Contracts"

cd card_forge

if [ ! -f "Move.toml" ]; then
    print_error "Move.toml not found in card_forge directory"
    exit 1
fi

print_success "Found Move.toml"

echo "Building Move contracts..."
sui move build
print_success "Build successful"

echo "Publishing contracts to Sui Testnet..."
echo "⏳ This may take 30-60 seconds..."

PUBLISH_OUTPUT=$(sui client publish --gas-budget 2000000000 2>&1)
PACKAGE_ID=$(echo "$PUBLISH_OUTPUT" | grep -oP '"packageObjectId":"0x\K[^"]*' | head -1)

if [ -z "$PACKAGE_ID" ]; then
    print_error "Failed to extract Package ID from deployment"
    echo "Full output:"
    echo "$PUBLISH_OUTPUT"
    exit 1
fi

print_success "Contracts deployed!"
print_success "Package ID: $PACKAGE_ID"

# Save Package ID to temp file for frontend
echo "Saving deployment info..."
cat > ../deployment-info.txt << EOF
PACKAGE_ID=$PACKAGE_ID
ACTIVE_ADDRESS=$ACTIVE_ADDRESS
DEPLOYED_AT=$(date)
EOF

print_success "Deployment info saved to deployment-info.txt"

# Step 5: Setup Frontend
print_header "Step 5: Setting Up Frontend"

cd ../suiclash-frontend

if [ ! -f "package.json" ]; then
    print_error "package.json not found in suiclash-frontend directory"
    exit 1
fi

print_success "Found package.json"

echo "Installing dependencies..."
npm install
print_success "Dependencies installed"

echo "Creating .env.local..."
cat > .env.local << EOF
# Sui Package IDs from deployment
NEXT_PUBLIC_PACKAGE_ID=$PACKAGE_ID

# Derived from package (update these after checking on Sui Scan)
NEXT_PUBLIC_CLASH_TOKEN_ID=$PACKAGE_ID
NEXT_PUBLIC_CLASH_CARD_ID=$PACKAGE_ID
NEXT_PUBLIC_CLASH_ARENA_ID=$PACKAGE_ID
NEXT_PUBLIC_CLASH_MARKET_ID=$PACKAGE_ID

# Network
NEXT_PUBLIC_NETWORK=testnet
EOF

print_success "Created .env.local"

# Step 6: Build Frontend
print_header "Step 6: Building Frontend"

echo "Building Next.js application..."
npm run build
print_success "Frontend built successfully"

# Step 7: Final Summary
print_header "Deployment Complete! 🎉"

echo "📦 Smart Contracts"
echo "  Package ID: $PACKAGE_ID"
echo "  Network: Sui Testnet"
echo "  Explorer: https://suiscan.xyz/testnet/object/$PACKAGE_ID"

echo ""
echo "🎮 Frontend"
echo "  Location: ./suiclash-frontend"
echo "  Environment: .env.local"

echo ""
echo "🚀 Next Steps:"
echo "  1. Start dev server:"
echo "     cd suiclash-frontend && npm run dev"
echo ""
echo "  2. Open browser:"
echo "     http://localhost:3000"
echo ""
echo "  3. Connect your Sui wallet"
echo ""
echo "  4. Claim $CLASH from faucet"
echo ""
echo "  5. Start playing! 🎮"

echo ""
echo "📋 Important Notes:"
echo "  • Keep your .env.local file secret (don't commit to git)"
echo "  • This is testnet - use fake money only"
echo "  • Transactions may take 30-60 seconds to confirm"
echo "  • Max faucet claims: 1x per 24 hours per address"

echo ""
print_success "All systems ready! Let's play SuiClash! ⚔️"
