"use strict";
/*let http = require('http')
http.createServer(function (request, response){//response é a resposta do servidor
    response.writeHead(200, {'Content-Type': 'text/plain'})//200 é quando o servidor nos contesta
    response.end('Hello Word\n')
}).listen(1337, "127.0.0.1")
console.log('Server running at http: //127.0.0.1:1337/');*/
let http = require("http").createServer();

function webServer(request, response) {
  response
    .writeHead(200, { "Content-Type": "text/html" })
    .end("<h1>Hello Node.js</h1>");
}

http.on("request", webServer).listen(3000, "localhost");

console.log("Server running at http: /localhost:3000/");
