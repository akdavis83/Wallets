const { ethers } = require('ethers');

function deriveFiveWalletsFromHdNode(mnemonic, derivationPath) {
  let wallets = [];

  for (let index = 0; index < 5; index++) {
    let hdNode = ethers.HDNodeWallet.fromPhrase(mnemonic, undefined, derivationPath + index);
    console.log('Derivation path', hdNode.path);
    console.log('Address', hdNode.address);
    console.log('Private key', hdNode.privateKey);
    console.log('==========');
    let wallet = new ethers.Wallet(hdNode.privateKey);
    wallets.push(wallet);
  }

  return wallets;
}

let mnemonic = 'upset fuel enhance depart portion hope core animal innocent will athlete snack';
let derivationPath = "m/44'/60'/0'/0";

let wallets = deriveFiveWalletsFromHdNode(mnemonic, derivationPath);

async function signTransaction() {
  let wallet = wallets[1]; 
  let toAddress = '0xd694F3928A1B8a6e965A5fB54dcAD1e3FaE0aD48';
  let value = '0.0056'; 

  let transaction = new ethers.Transaction();
  transaction.to = toAddress;
  transaction.nonce = 1;
  transaction.gasLimit = 210000;
  transaction.maxFeePerGas = 90000000000;
  transaction.maxPriorityFeePerGas = 70000000000;
  transaction.value = ethers.parseEther(value);
  transaction.data = '0x';
  transaction.chainId = 11155111;
  transaction.type = 2;

  const signedTransaction = await wallet.signTransaction(transaction);
  console.log("Signed Transaction: ");
  console.log(signedTransaction);
}

signTransaction();