var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end();
      return;
    }
    res.writeHead(200);
    res.end(data);
  });

}).listen(8000);