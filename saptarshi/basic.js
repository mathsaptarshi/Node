var http=require('http');
var port =2000;
http.createServer(function(req,res)
			{
				res.end('Hello Node Js');
			}).listen(port);
console.log('Server is running on the port no::'+port)