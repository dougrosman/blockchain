const SHA256 = require('crypto-js/sha256');

// the SHA256 algorithm is the same no matter where it is used
// https://andersbrownworth.com/blockchain/hash

// the hash is stored as a WordArray be default.
// convert hex to decimal to check here: https://www.rapidtables.com/convert/number/hex-to-decimal.html

let rawHash = SHA256("blockchain!");

console.log(`\nThe raw hash:\n`);
console.log(rawHash);

// we convert the hash to a string to get a hexadecimal hash string (the kind we've seen before).
let hash = rawHash.toString();

console.log(`\nThe regular hash: ${"a"}\n`);