var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
  
  var filePath = '.' + req.url;
  if (filePath == './')
    filePath = './index.html';
    
  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }
  

  
  fs.exists(filePath, function(exists) {
  
    if (exists) {
      fs.readFile(filePath, function(err, content) {
        if (err) {
          res.writeHead(500);
          res.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    }
    else {
      res.writeHead(404);
      res.end();
    }
  });}).listen(8000);




//  To-do: set specific URLs on specific pages/links

