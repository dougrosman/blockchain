const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        //this.hash = '';

        // implement after creating calculateHash()
        this.hash = this.calculateHash();
    }

    calculateHash() {
        // calculate and store the hash
        let hash = SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash);

        // convert the hash to a string
        let hashString = hash.toString();

        // return the string
        return hashString;

    }
}

class Blockchain {
    constructor() {
        // this.chain = [];

        // implement after creating createGenesisBlock
        this.chain = [this.createGenesisBlock()];
        
    }

    createGenesisBlock() {
        return new Block(0, "09/22/2020", "Genesis Block", "0");
    }

    // returns latest block in the chain
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    // adds a block to the chain, accepts a Block object
    addBlock(newBlock) {
        // get the hash of the latest block
        newBlock.previousHash = this.getLatestBlock().hash;

        // calculate the hash of the new block
        newBlock.hash = newBlock.calculateHash();

        // add the new block to the chain
        this.chain.push(newBlock);
    }

    isChainValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }
}

// create an instance of the coin

let demoCoin = new Blockchain();

demoCoin.addBlock(new Block(1, "09/22/2020", {amount: 4}));
demoCoin.addBlock(new Block(2, "09/22/2020", {amount: 494}));
demoCoin.addBlock(new Block(3, "09/22/2020", {amount: 800}));

console.log("is blockchain valid? " + demoCoin.isChainValid());

// tamper with the chain
demoCoin.chain[1].data = {amount: "fish"};
demoCoin.chain[1].hash = demoCoin.chain[1].calculateHash();

console.log("is blockchain valid? " + demoCoin.isChainValid());
// console.log(JSON.stringify(demoCoin, null, 4));

