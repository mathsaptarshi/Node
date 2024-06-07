var http=require('http');
var port =2020;
http.createServer(function(req,res)
			{
				res.end('Welcome to BWU');
			}).listen(port);
console.log('Server is running on the port no::'+port)