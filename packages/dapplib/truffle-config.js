require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note oven quantum hunt drive equal genuine'; 
let testAccounts = [
"0x77da8b21ec5931552e7e4c4b85e78623784ed01a5c316d4ab3c1b640bfdc380d",
"0x172800b581e324b872b5e2405cea7305f62f93709cef9d173308648434629892",
"0x3a1c21dfb79d849d9c69c8c288681f94bb614fe29d86c3a4b08036904c248f32",
"0xe329c415c053a658839910eb90c6ae3df0ccb65bd5274db5b7687cf587811425",
"0x0b9a510f3cd60d655bad728cb2cffd437ef04ac19b827fcd896a030f3637ecf1",
"0x17a839becd70151d4311c013de9ede1d37de577cdc36b8bc5f52801c2af9491d",
"0x65211fe8db2accde95de2b28f0cb1f53295272e90fc23a74b9dac2be4cb05bed",
"0x5fd902a1953a948bff9c0266ef31834c01745fb539e18266bc24dac595a07947",
"0x9929e7c717fb329df608b786344513486fb07890208fa267b9d962b833fb8cfe",
"0xff662c133ba22be74c080d92eb9208952524467259a58d410702a40aae258889"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

