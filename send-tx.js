const ethers = require('ethers')
const provider = new ethers.InfuraProvider(network = 11155111, "7e5bb1725c8f4927ae03c9f8bfd80513");
const privateKey = '0xfc16ba8bae3e8c6c453440cd7ab5beef0fe933861de04159c2ea68b1729dc9e6'
const wallet = recoverWalletFromPrivateKey(privateKey, provider)
provider.getBalance(wallet.address).then(a=>console.log((`address: ${wallet.address} balance: ${a}`)))
const toAddress = '0xd694F3928A1B8a6e965A5fB54dcAD1e3FaE0aD48'
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