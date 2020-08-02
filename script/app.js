var express = require('express');
var app = express();
var port = 8001;


// Handle request to serve main file
app.get('/', function(req, res) {
	// __dirname is the working directory of the project
	res.sendFile(__dirname + '/public/views/index.html');
});

// allow the server to serve content from public directory
app.use(express.static('public'));

// Set server to listen to `port`
app.listen(port, function() {
	console.log('Server on port: ' + port);
});
