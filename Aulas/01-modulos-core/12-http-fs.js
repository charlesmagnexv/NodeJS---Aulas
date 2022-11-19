"use strict";
/*let http = require('http')
http.createServer(function (request, response){//response é a resposta do servidor
    response.writeHead(200, {'Content-Type': 'text/plain'})//200 é quando o servidor nos contesta
    response.end('Hello Word\n')
}).listen(1337, "127.0.0.1")
console.log('Server running at http: //127.0.0.1:1337/');*/
let http = require("http").createServer(webServer),
  fs = require("fs");

function webServer(request, response) {
  function readFile(err, data) {
    if (err) {
      throw err;
    } else {
      response.end(data);
    }
  }
  response.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("assets/index.html", readFile);
}

http.listen(3000);

console.log("Server running at http: /localhost:3000/");
