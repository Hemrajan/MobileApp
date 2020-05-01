const EC = require('elliptic').ec;

// Create and initialize EC context
// (better do it once and reuse it)
const ec = new EC('secp256k1');

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log();
console.log('Private Key:',privateKey);

console.log();
console.log('Public Key',publicKey);
