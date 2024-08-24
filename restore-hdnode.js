const { ethers } = require('ethers');

async function restoreHDNode(mnemonic, path) {
    const hdNodeWallet = await ethers.HDNodeWallet.fromPhrase(mnemonic, undefined, path);
    return hdNodeWallet;
}

const mnemonic =
    'upset fuel enhance depart portion hope core animal innocent will athlete snack';

(async () => {
    const newHDNodeWallet = await restoreHDNode(mnemonic, "m/44'/60'/0'/0/0");
    console.log(newHDNodeWallet);
})();