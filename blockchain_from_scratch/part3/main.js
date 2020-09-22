const SHA256 = require('crypto-js/sha256');

class Transaction {
    constructor(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}
// add new functionality:
// transactions replaces data
// remove index
class Block {
    constructor(timestamp, transactions, previousHash = ''){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        // calculate and store the hash
        let hash = SHA256(this.timestamp + this.transactions + this.previousHash + this.nonce);

        // convert the hash to a string
        let hashString = hash.toString();

        // return the string
        return hashString;

    }

    // we want the hash of our block to begin with a certain amount of zeros
    mineBlock(difficulty) {

        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            //console.log(this.hash);
            this.hash = this.calculateHash();
        }

        console.log("BLOCK MINED: " + this.hash + "\nNonce: " + this.nonce);

    }
}

// new functionality:
// add a mining reward
// place to store pending transactions
// need to mine block for pending transactions
// replace addBlock() method with minePendingTransactions


class Blockchain {
    constructor() {
        // this.chain = [];

        // implement after creating createGenesisBlock
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    }

    createGenesisBlock() {
        return new Block("09/22/2020", "Genesis Block", "0");
    }

    // returns latest block in the chain
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress){
        let block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined!');
        this.chain.push(block);

        // the "coinbase" transaction
        this.pendingTransactions = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    // adds a transaction to the transactions array
    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance = 0;

        for(const block of this.chain){
            for(const tx of block.transactions) {
                if(tx.fromAddress === address) {
                    balance -= tx.amount;
                }

                if(tx.toAddress === address) {
                    balance += tx.amount;
                }
            }
        }
        return balance;
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

console.log("\n$$$$$$$$$$$$$$$$$$$$$ MINING TIME $$$$$$$$$$$$$$$$$$$$$\n")


console.log('\nBalance of Dog1 is: ', demoCoin.getBalanceOfAddress('dog'));
console.log('\nBalance of Cat1 is: ', demoCoin.getBalanceOfAddress('cat'));
console.log(demoCoin.pendingTransactions);
console.log(`\nStarting the miner...`);
demoCoin.minePendingTransactions('doog');
console.log('\nBalance of Doog is: ', demoCoin.getBalanceOfAddress('doog'));
console.log('\nBalance of Doog is: ', demoCoin.getBalanceOfAddress('dog'));
console.log('\nBalance of Doog is: ', demoCoin.getBalanceOfAddress('cat'));

console.log(`\nStarting the miner...`);
demoCoin.minePendingTransactions('doog');
console.log('\nBalance of Doog is: ', demoCoin.getBalanceOfAddress('doog'));

console.log(`\nStarting the miner...`);
demoCoin.minePendingTransactions('doog');
console.log('\nBalance of Doog is: ', demoCoin.getBalanceOfAddress('doog'));