var http = require('http');
var port = 8086;
var body = 'Hello I am a http server with port number 8086';
var len = body.length;
http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/plain',
                        'content-Length': len});
    res.end(body);

}).listen(port);
console.log('Create http server');

