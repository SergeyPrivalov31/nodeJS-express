const fs = require('fs');

fs.readFile('01_start.js', (error,txt) => {
    console.log(txt.toString(), 2)
});

console.log(fs.readFileSync('01_start.js', 'utf8'), 1);
