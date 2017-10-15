let user = require('./User');
console.log(`userName:${user.userName}`);
console.log(`I'm ${user.userName} say ${user.sayHello()}`);
let http = require('http');
let url = require('url');
let util = require('util');
let server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain; Charset=utf-8");
    res.end(util.inspect(req.url));
})
server.listen(3000,'127.0.0.1', function(){
    console.log("已经运行")
})