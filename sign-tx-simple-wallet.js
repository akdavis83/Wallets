const ethers = require('ethers')

const privateKey = '0x'
const wallet = recoverWalletFromPrivateKey(privateKey)
const toAddress = '0x'
const etherValue = '0.01'

function recoverWalletFromPrivateKey(privateKey) {
    return new ethers.Wallet(privateKey)
}

async function signTransaction(wallet, toAddress, value) {
    let transaction = new ethers.Transaction();
    transaction.to = toAddress;
    transaction.nonce = 0;
    transaction.gasPrice = 210000;
    transaction.maxFeePerGas = 90000000000;
    transaction.maxPriorityFeePerGas = 70000000000;
    transaction.value = ethers.parseEther(value);
    transaction.data = '0x'
    transaction.chainId = 11155111
    transaction.type = 2

    signedTransaction = wallet.signTransaction(transaction);
    return signedTransaction;
};

(async () => {
    const signedTx = await signTransaction(wallet, toAddress, etherValue)
    console.log(`Signed transaction: ${signedTx}`)
})()

