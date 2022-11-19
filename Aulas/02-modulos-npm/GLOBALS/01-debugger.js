//fazer debug com o core de Node
"use strict";
let http = require("http");

function webServer(request, response) {
  response
    .writeHead(200, { "Content-Type": "text/html" })
    .end("<h1>Hello Node.js</h1>");
    //debugger;
}

http.createServer(webServer).listen(3000, "localhost");

console.log("Server running at http: /localhost:3000/");
