const http = require('http');
const fs = require('fs');
    const server = http.createServer();
    server.on('request', function(request, response){
        response.writeHead(200);
        let newFile = fs.createWriteStream('test3.txt');
        request.pipe(newFile);

        request.on('end', ()=>{ response.end('файд загружен'); })

        request.on('data', function(chunk){
            chunk = `Новая часть: ${chunk}`;
            newFile.write(chunk);
        })
    })

    server.listen(8000);