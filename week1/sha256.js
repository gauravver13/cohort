const crypto = require('crypto');

const input = "100xDevs";
const input1 = "596138";

const hash = crypto.createHash('sha256').update(input).digest('hex');
const hash1 = crypto.createHash('sha256').update(input1).digest('hex');

console.log(hash)
console.log(`Hash Goal:`,hash1)

// let prefix = 0000;

function findWithPrefix(prefix){
    let input = 0
    while(true) {
        let inputStr = toString(input)
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash };
        }
        input++;    
    }
}

const result = findWithPrefix('00');

console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);