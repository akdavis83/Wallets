const ethers = require('ethers')

function recoverWalletFromPrivateKey(privateKey) {
    return new ethers.Wallet(privateKey)
}

const privateKey = "0x"

console.log(recoverWalletFromPrivateKey(privateKey))
