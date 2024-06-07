var http = require('http');
var port =2020;
const server=http.createServer(function(req,res){
    res.end('Welcome to BWU!!!')
});
server.listen(2020);
console.log('Server running at the port '+port);