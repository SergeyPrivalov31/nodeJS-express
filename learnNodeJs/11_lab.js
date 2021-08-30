let http = require('http');
let url = require('url');

const server = http.createServer((req, res) => {
    if(req.url == '/page1') {
        res.writeHead(302, {Location: 'http://127.0.0.1:8002/page2'})
        console.log('перенаправлениие');
        res.end();
        return;
    }else{
        res.writeHead(200, {"COntent-type": 'text/html; charset=UTF-8'});
        res.write('<h2>Request</h2>');
        console.log('Отсаемся на месте')
    }

    res.write(req.url + '<br />')
    console.log(req.method, req.url);

    if(url.parse(req.url).query)
    console.log(url.parse(req.url).query.split('&'));
    res.end();
});
server.on('listening', (err) => {
    console.log("событие listening");
});
server.listen(8002);