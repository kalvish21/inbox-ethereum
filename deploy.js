const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require ('./compile');

const provider = new HDWalletProvider(
    'main inhale balance puzzle guilt tumble tattoo stool depth zero dose margin',
    'https://rinkeby.infura.io/v3/81391a73eb0e41d58ae3b72eef243dcd'
);
const web3 = new Web3(provider);



