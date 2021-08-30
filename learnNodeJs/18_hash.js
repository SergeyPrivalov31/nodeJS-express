const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('sha256');
const input = fs.createReadStream('test_new.txt');

input.on('readable', () => {
    const data = input.read();
    if (data)
        hash.update(data);
    else {
        console.log(`${hash.digest('hex')}`);
    }
});