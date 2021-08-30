const http = require('http');
    const server = http.createServer((req, res) => {
        //req - это http.IncomingMessage, который является потоком Readable.
        //res - это http.ServerResponse, который является потоком Writable.
        let body = '';
        //Получаем данные как UTF-8 строки.
        //Если кодировка не установлена, объекты буфера будут получены
        req.on('data', (chunc) => {
            body += chunc;
        });
        //Событие 'end' указывает что всё тело было получено.
        req.on('end', ()=> {
            try {
                const data = JSON.parse(body);
                //Напишите что нибудь интересное для пользователя:
                res.write(typeof data);
                res.write('<br />');
                res.write(data.toString());
                console.log(JSON.stringify(data, null, ' '));
                res.end();
            } catch (er) {
                //плохой JSON :(
                res.statusCode = 400;
                return res.end(`ошибка: ${er.message}`);
            }
        })
    });
    server.listen(1337)