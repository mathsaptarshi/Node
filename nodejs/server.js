/*var http = require('http');

port = 8085;

http.createServer(function(req,res){
    res.end('hello node js');
}).listen(port);
console.log('Server running on port number ' + port);*/


var http = require('http');

port = 8085;

var server = http.createServer(function(req,res){
    res.end('hello node js');
});
server.listen(port);
console.log('Server running on port number ' + port);