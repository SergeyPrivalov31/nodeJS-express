const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');

const inp = fs.createReadStream('test_new.txt');
const out = fs.createWriteStream('test.txt.gz');

inp.pipe(gzip)
.on('error', ()=>{
    console.log('обработка ошибки');
})
.pipe(out)
.on('error', () => {
    console.log('обработка ошибки');
})