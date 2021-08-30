let http = require('http');
const fn = (request, response) => {
    // response.writeHead(200);
    // response.write('Hello World');
    // response.end('!');

    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'test/html; charset=utf-8');
    // response.end('Hello World\n');

    const body = 'Hello World !!!';
    response.writeHead(200, {
        'COntent-Length': Buffer.byteLength(body),
        'COntent-Type': 'text/plain'
    });
    response.write(body);
    response.end();
}

let app = http.createServer(fn);
app.listen(8000);
console.log('Listening...');
