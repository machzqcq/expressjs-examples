var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	url = require('url');

var server = http.createServer( function onRequest(request, response) {
	
	var urlParts = url.parse(request.url);
	console.log(urlParts.pathname);
	
	var doc = './docs' + urlParts.pathname;
	
	fs.exists(doc, function fileExists(exists) {
		
		if(exists)  {
			
			response.writeHead(200, { 'Content-Type': 'text/plain'});
			fs.createReadStream(doc).pipe(response);
		}
		
		else {
			response.writeHead(404);
			response.end('Not found\n');
		}
	});
}).listen(3000);