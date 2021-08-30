let http = require("http");
let url = require("url");
http
    .createServer((request, response) => {
        
        let data = "";
        let input = url.parse(request.url);
        if(input.query) {
            let paramsStart = input.query.split("&");
            let params = {};
                paramsName = ["s", "p", "n"];
            paramsStart.forEach(e => {
                let [key, value] = e.split("=");
                if (paramsName.includes(key) && parseFloat(value)) {
                    params[key] = parseFloat(value);
                }
            });
            if (Object.keys(params).length == 3) {
                response.writeHead(200, { "Content-Type": "application/json" });
                let {s, p, n} = params;
                p /= 1200;
                n *= 12;
                let data = {};
                data["a"] = (s * p) / (1 - (1 + p) ** -n);
                data["overhead"] = data["a"] * n - s;
                data = JSON.stringify(data);
                response.write(data);
            }
        }
    request.pipe(response)
    })
    .listen(8000);
