var messages = [{message:'hello'}];

http = require('http');
http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(messages));
  }
  if (req.method === 'POST') {
    var postData = '';
    req.on('data', function(chunk) {
      postData += chunk.toString();
    });
    req.on('end', function() {
      console.log(JSON.parse(postData));
      var msg = JSON.parse(postData);
      messages.push(msg);
      res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(messages));
    });
  }
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
        'Connection': 'close',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });
    res.end("{}");
  }
}).listen(9500);
