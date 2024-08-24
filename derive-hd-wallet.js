const { ethers } = require('ethers');

function deriveFiveWalletsFromHdNode(mnemonic, derivationPath) {
    let wallets = []

    for (let index = 0; index < 5; index++) {
        let hdNode = ethers.HDNodeWallet.fromPhrase(mnemonic, undefined, derivationPath + index);
        console.log('Derivation path', hdNode.path)
        console.log('Address', hdNode.address)
        console.log('Private key', hdNode.privateKey)
        console.log('==========')
        let wallet = new ethers.Wallet(hdNode.privateKey)
        wallets.push(wallet)
    }

    return wallets
}

let mnemonic = 
    'upset fuel enhance depart portion hope core animal innocent will athlete snack'
let derivationPath = "m/44'/60'/0'/0"

deriveFiveWalletsFromHdNode(mnemonic, derivationPath)