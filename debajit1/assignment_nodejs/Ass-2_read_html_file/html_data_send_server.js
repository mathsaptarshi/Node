
const fs = require('fs');

var read = fs.readFileSync('html_page.html','utf8');

var http = require('http');
var port = 8080;
var body = read;
var len = body.length;
http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/html',
                        'content-Length': len});
    res.end(body);

}).listen(port);
console.log('Create http server');

