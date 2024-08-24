const ethers = require('ethers')

function recoverWalletFromPrivateKey(privateKey) {
    return new ethers.Wallet(privateKey)
}

async function saveWalletToJSON(wallet, password) {
    return wallet.encrypt(password)
}

async function recoverWalletFromJSON(json, password) {
    return ethers.Wallet.fromEncryptedJson(json, password)
}

let privateKey = '0x'

let wallet = recoverWalletFromPrivateKey(privateKey)
let password = 'p@ssw0rd~3';

(async () => {
    const encryptedWallet = await saveWalletToJSON(wallet, password)
    const decryptedWallet = await recoverWalletFromJSON(encryptedWallet, password)
    console.log(decryptedWallet)
})()
