const{Blockchain, Transaction}= require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('716f04ee08a7d42908693aa319d5d80fdf77fcc702985a7c5941e7b246032806');
const myWalletAddress = myKey.getPublic('hex');



let TuerganBlockChain = new Blockchain();

const tx1 = new Transaction(myWalletAddress,'public key goes here',10);
tx1.signTransaction(myKey);
TuerganBlockChain.addTransaction(tx1);

//TuerganBlockChain.createTransaction(new Transaction('address1','address2',100));
//TuerganBlockChain.createTransaction(new Transaction('address2','address1',50));

//console.lod('\n Starting the Miner...');
TuerganBlockChain.minePendingTransactions(myWalletAddress);

TuerganBlockChain.chain[1].transactions[0].amount =1;

console.log('\nBalance of xavier is', TuerganBlockChain.getBalanceOfAddress(myWalletAddress));

//console.log('\nIs chain valid ?',TuerganBlockChain.isChainValid());