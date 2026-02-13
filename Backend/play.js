
const http = require('http');

port = 3000
const server1 = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
});

server1.listen(3000);