// Create web server
// Create a web server that listens on port 3000. The server should respond with the path and method of the request.
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Path: ' + url.parse(req.url).pathname + '<br>');
    res.write('Method: ' + req.method + '<br>');
    res.end();
}).listen(3000);
// Run the code and open the browser. Enter the URL http://localhost:3000/member in the browser. The server should respond with the path and method of the request.
