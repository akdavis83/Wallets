const ethers = require('ethers')

function recoverWalletFromPrivateKey(privateKey) {
    return new ethers.Wallet(privateKey)
}

const privateKey = "0x495d5c34c912291807c25d5e8300d20b749f6be44a178d5c50f167d495f3315a"

console.log(recoverWalletFromPrivateKey(privateKey))