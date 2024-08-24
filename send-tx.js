const ethers = require('ethers')
const provider = new ethers.InfuraProvider(network = 11155111, "7e");
const privateKey = '0x'
const wallet = recoverWalletFromPrivateKey(privateKey, provider)
provider.getBalance(wallet.address).then(a=>console.log((`address: ${wallet.address} balance: ${a}`)))
const toAddress = '0x'
const etherValue = '0.0056'
console.log(wallet.address)
async function signTransaction(wallet, toAddress, value) {
  const txCount = await provider.getTransactionCount(wallet.address);
  console.log(`txCount: ${txCount}`);
  let transaction = new ethers.Transaction();
  transaction.to = toAddress;
  transaction.nonce = txCount;
  transaction.gasLimit = 210000;
  transaction.maxFeePerGas = 60000000000;
  transaction.maxPriorityFeePerGas = 40000000000;
  transaction.value = ethers.parseEther(value);
  transaction.data = '0x'
  transaction.chainId = 11155111
  transaction.type = 2
  signedTransaction = wallet.signTransaction(transaction);
  return signedTransaction;
}
function recoverWalletFromPrivateKey(privateKey) {
  return new ethers.Wallet(privateKey, provider)
}
;(async () => {
  const signedTx = await signTransaction(wallet, toAddress, etherValue);
  console.log(`Signed transaction: ${signedTx}`);
})()
