const { ethers } = require('ethers');

function generateRandomHDWallet() {
    return ethers.Wallet.createRandom()
}

const wallet = generateRandomHDWallet()
console.log(wallet)
console.log(`Mnemonic: ${wallet.mnemonic.phrase}`)