
// Text for the messages
var messages = [{message:'hello'}];
var port = 9500;

//Create the server
onRequest = function(req, res) {
	console.log(req.method);

	if (req.method == 'POST') {
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});

		req.on('end', function() {
			console.log("Got POST data:");
			console.log(JSON.parse(postData));

			//Add message to the array
			messages.push(JSON.parse(postData));
		});



	} else {

		//For GET

	}
	
	res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        //'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        //'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });

	res.end(JSON.stringify(messages));

	};	

	http = require('http');
	http.createServer(onRequest).listen(port);
