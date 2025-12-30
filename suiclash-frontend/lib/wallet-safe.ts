// lib/wallet-safe.ts
// Safe wallet detection without extension conflicts

export interface WalletObject {
  sui?: any
  ethereum?: any
}

// Safely check for wallet without triggering extension conflicts
export function getSafeWindow(): WalletObject {
  if (typeof window === 'undefined') return {}
  
  try {
    const windowObj = window as any
    return {
      sui: windowObj.sui || windowObj.__sui_dev_env?.wallet || windowObj.suiWallet,
      ethereum: windowObj.ethereum,
    }
  } catch (error) {
    console.warn('Could not access wallet object safely:', error)
    return {}
  }
}

// Check if Sui wallet is available - with robust detection methods
export function isSuiWalletAvailable(): boolean {
  try {
    if (typeof window === 'undefined') return false
    
    const windowObj = window as any
    
    // Method 1: Check window.sui directly
    try {
      if (windowObj.sui && typeof windowObj.sui.requestPermissions === 'function') {
        console.log('✅ Sui wallet detected via window.sui')
        return true
      }
    } catch (e) {
      console.warn('Error checking window.sui:', e)
    }
    
    // Method 2: Check __sui_dev_env (dev mode)
    try {
      if (windowObj.__sui_dev_env?.wallet) {
        console.log('✅ Sui wallet detected via __sui_dev_env')
        return true
      }
    } catch (e) {
      console.warn('Error checking __sui_dev_env:', e)
    }
    
    // Method 3: Check suiWallet
    try {
      if (windowObj.suiWallet) {
        console.log('✅ Sui wallet detected via suiWallet')
        return true
      }
    } catch (e) {
      console.warn('Error checking suiWallet:', e)
    }
    
    // Method 4: Generic check for window.sui existence
    try {
      if (windowObj.sui) {
        console.log('✅ Sui wallet detected (generic check)')
        return true
      }
    } catch (e) {
      console.warn('Error generic check:', e)
    }
    
    console.log('⚠️ Sui wallet not detected - user should install extension')
    return false
  } catch (error) {
    console.warn('Fatal wallet detection error:', error)
    return false
  }
}

// Check with retry and wait for all extensions to load
export async function isSuiWalletAvailableAsync(): Promise<boolean> {
  // Wait for extensions to stabilize
  console.log('⏳ Waiting for extensions to load...')
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Try immediate check
  if (isSuiWalletAvailable()) return true
  
  console.log('🔄 Wallet not found immediately, retrying...')
  
  // Retry with longer delays
  for (let i = 1; i <= 4; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(`🔄 Retry ${i}/4...`)
    
    if (isSuiWalletAvailable()) {
      console.log(`✅ Wallet found on retry ${i}`)
      return true
    }
  }
  
  console.log('❌ Sui wallet not found after all retries')
  console.log('💡 Please ensure Sui Wallet extension is installed and enabled')
  return false
}

// Safely connect to Sui wallet
export async function connectSuiWallet() {
  try {
    const { sui } = getSafeWindow()
    
    if (!sui) {
      throw new Error('Sui Wallet not found. Please install Sui Wallet extension.')
    }

    // Request wallet connection
    const accounts = await sui.requestPermissions()
    
    if (accounts && accounts.length > 0) {
      return {
        success: true,
        address: accounts[0],
        message: 'Connected to Sui Wallet',
      }
    }
    
    return {
      success: false,
      message: 'No wallet accounts found',
    }
  } catch (error: any) {
    console.error('Wallet connection error:', error)
    return {
      success: false,
      message: error.message || 'Failed to connect wallet',
      error: error,
    }
  }
}

// Get current account
export async function getCurrentAccount() {
  try {
    const { sui } = getSafeWindow()
    
    if (!sui) {
      return { address: null }
    }

    const accounts = await sui.getAccounts()
    
    if (accounts && accounts.length > 0) {
      return {
        address: accounts[0],
        accounts: accounts,
      }
    }
    
    return { address: null }
  } catch (error) {
    console.error('Error getting current account:', error)
    return { address: null, error }
  }
}

// Disconnect wallet
export async function disconnectWallet() {
  try {
    // Sui wallet doesn't have explicit disconnect, just clear local state
    return { success: true }
  } catch (error) {
    console.error('Disconnect error:', error)
    return { success: false, error }
  }
}
