var http = require('http');
const fs =require('fs');
var port = 2030;
http.createServer(function(req,res)
    {
        res.end('Hello!!! I am a http server with port number'+port);
        console.log('Welcome to BWU');
    }).listen.port;
