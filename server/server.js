let http = require('http');
let url = require('url');
let util = require('util');
let fs = require('fs');
let server = http.createServer((req,res) => {
    // res.statusCode = 200;
    // res.setHeader("Content-Type","text/plain; Charset=utf-8");
    console.log(req.url)
    var pathname = url.parse(req.url).pathname;
    fs.readFile(pathname.substring(1), function(err,data) {
        if(err) {
            res.writeHead(404,{
                'Content-type': 'text/html'
            })
        }else {
            res.writeHead(200,{
                'Content-type': 'text/html'
            })
            res.write(data.toString());
        }
        res.end(req.url);
    })
    
})
server.listen(3000,'127.0.0.1', function(){
    console.log("已经运行")
})