require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food damp cost pulse pulse gesture muscle army gather'; 
let testAccounts = [
"0xc6d09ea41095f6791071a3c62e41133def327e2876bb055e38b4f62bf406352c",
"0x660f3f0a37e0af418a30ca503c1a13e65603a548bed5fc6dee225d31366d923c",
"0x30fe0292ea61d5988bb629279e5b62938a8aa2513b3288855849ed7e8123d4a3",
"0xefc3a83ac5775f4d8cebe8eb959d0fbcc4936cbf2dc65df87f01f0f5d06802b6",
"0xbdd893da23fde9cf9bead44be67489c946b732ccd390063e49ac8188035e0cc0",
"0x1a2b33146dbf24b3ae11469106071f63a065d5a99d46448df16c63bf3d95c9a1",
"0x66a6000c377f20da229b01d08ef00fce7fb3e3dab63e31d80f5a55d4b8989aeb",
"0x8e8c08aa724710b74daa1ce87b19598aff2aae01071d5483711f0707f7eace6c",
"0xefb77a5ea5c6c9750ea3bf54c3ffc5524c2488149ec768206b3071a5f29cee50",
"0x8793d2dcb6ebcf6fc220ab4814038897a3bd9889084649c54717153a97a5af27"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


