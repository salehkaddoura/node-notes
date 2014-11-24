Blocking Code vs. Non Blocking Code

- Blocking Code:
	Read file from Filesystem, set equal to "contents" -> 
	Print contents -> 
	Do something else

	var contents = fs.readFileSync('etc/hosts');
	console.log(contents);
	console.log('Doing something else');

- Non Blocking Code:
	Read file from Filesystem ->
		whenever youre complete, print the contents ->
	Do Something else

	fs.readFile('/etc/hosts', function(err, contents) {
		console.log(contents);
	});
	console.log('Doing something else');

	// OR
	// reads two files in parallel
	var callback = function(err, contents) {
		console.log(contents);
	}
	fs.readFile('/etc/hosts', callback);
	fs.readFile('/etc/inetcfg', callback);


//=========================================================================================
// Node hello.js

var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200); //status code in header
	res.write("hello, this is dog."); //response body
	res.end(); //close the connection
}).listen(8080); //listen for connections on this port
console.log("listening on port 8080....");

