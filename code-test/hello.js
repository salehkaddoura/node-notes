// Node hello.js

var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200); //status code in header
	res.write("hello, this is dog."); //response body
	res.end(); //close the connection
}).listen(8080); //listen for connections on this port
console.log("listening on port 8080....");


http.createServer(function(req,res) {
	res.writeHead(200);
	res.write("Dog is running.");
	setTimeout(function() {
		res.write("Dog is done.");
		res.end();
	}, 5000);
}).listen(8080);