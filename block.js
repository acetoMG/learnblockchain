const { SHA256 } = require('crypto-js');


class Block {
    constructor(data, index, timestamp = String(new Date()), previousHash) {
        this.data = data;
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.nonce = 0;

        this.hash = this.calculateHash();
    }

    calculateHash() {
        return SHA256(JSON.stringify(this.data) + this.index + this.timestamp + this.previousHash + this.nonce).toString();

    }

    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) != Array(difficulty + 1).join('0')) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log(`Block ${this.index + 1} mined: ${this.hash} `);

    }

}

module.exports = Block;