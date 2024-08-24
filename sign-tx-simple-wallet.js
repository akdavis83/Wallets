const ethers = require('ethers')

const privateKey = '0xfc16ba8bae3e8c6c453440cd7ab5beef0fe933861de04159c2ea68b1729dc9e6'
const wallet = recoverWalletFromPrivateKey(privateKey)
const toAddress = '0x7dD77eD9baCEF1d348898fDc22b9dA3334f4aF39'
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

