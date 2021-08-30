let http = require('http');
const fs = require('fs');

const fn = (request, response) => {

    if(request.url === '/download'){
        console.log(`${request.url}`);
        const file = 'test_new.txt'

        fs.stat(file, (err, stats) => {
            if (err) throw err;
            
            fs.readFile(file, (error,txt) => {
                const body = txt.toString();
                response.writeHead(200, {
                    'Content-Length': Buffer.byteLength(body),
                    'Content-Type': 'text/html; charset=UTF-8',
                    'Content-Disposition': 'attachment; filename="download.html"'
                });
                response.write(body);
                response.end();
            });
        });
        return;
    }
    
    const index = '07_index.html';
    fs.stat(index, (err, stats) => {
        if (err) throw err;
        
        fs.readFile(index, (error,txt) => {
            const body = txt.toString();
            response.writeHead(200, {
                'COntent-Length': Buffer.byteLength(body),
                'COntent-Type': 'text/html; charset=UTF-8',
            });
            response.write(body);
            response.end();
        });


    })
}

let app = http.createServer(fn);
app.listen(8001);
console.log('Listening...');
