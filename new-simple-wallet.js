const ethers = require('ethers')

function createRandomWallet() {
    return ethers.Wallet.createRandom()
}

console.log(createRandomWallet())