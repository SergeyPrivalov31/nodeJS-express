//подключаем модуль
let fs = require('fs');

//создание потока на чтение. file - это объект
let file = fs.createReadStream('test_new.txt');

//создание потока на запись
let newFile = fs.createWriteStream('test2.txt');

//pipe берёт поток на чтение и отправляет на запись
file.pipe(newFile);