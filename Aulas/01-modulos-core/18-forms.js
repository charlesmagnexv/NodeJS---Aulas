"use strict";

var http = require("http").createServer(webServer),
  form = require("fs").readFileSync("assets/forms.html"),
  querystring = require("querystring"),
  util = require("util"),
  dataString = "";
function webServer(req, res) {
  if (req.method == "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form);
  }
  if (req.method == "POST") {
    req
      .on("data", function (data) {
        dataString += data;
      })
      .on("end", function () {
        let dataObject = querystring.parse(dataString),
          dataJSON = util.inspect(dataObject),
          templateString = `
            Los datos que enviaste por POST como string son: ${dataString}
            Los datos que enviaste por POST como string son: ${dataJSON}
        `;
        console.log(templateString);
        res.end(templateString);
      });
  }
}
http.listen(3000);
console.log(`Servidor rodando em http://localhost:3000/`);
