var fs = require('fs');

fs.readFile('./firstApps/writeToConsole.js', 'utf-8', function OnFileRead (err, data) {
	if(err) {
		throw err;
	}
	console.log('File Contents is:');
	console.log(data);
	
}) 