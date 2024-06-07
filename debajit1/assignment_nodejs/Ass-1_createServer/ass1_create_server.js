var http = require('http');
var port =2020;
var body = 'Welcome to BWU!!!'
var ln = body.length;
const server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain',
                        'content-Length': ln});
    res.end(body);
}).listen(port);
console.log('Server running at the port ', port);