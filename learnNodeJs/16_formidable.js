var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
http.createServer(function(req, res){
    if (req.url == '/upload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newPath = 'C:/dev/nodejs/upload/' + files.filetoupload.name;
            fs.rename(oldpath, newPath, function (err) {
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
                res.write('Файл загружен и перемещён!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="upload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload">');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);