var http = require('http');
var port = 2020;
http.createServer(function(req,res)
    {
        res.end('Hello!!! I am a http server with port number'+port);
        console.log('Welcome to BWU');
    }).listen.port;
