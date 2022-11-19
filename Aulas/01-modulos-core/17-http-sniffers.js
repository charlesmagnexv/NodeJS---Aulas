"use strict";

let http = require("http"),
  options = {
    host: "bextlan.com",
    port: 80,
    path: "/",
  },
  htmlCode = "";

function httpClient(res) {
  console.log(
    `El sitio ${options.host} ha respondido. Código de Estado: ${res.statusCode}`
  );
  res.on("data", function (data) {
    htmlCode += data;
    console.log(data, data.toString()); //odata.toString() retorna o html da página que requisitei
  });
}
function httpError(err) {
  console.log(
    `El sitio ${options.host} no respondió. Código de Estado: ${err.code}. Error: ${err.message}`
  );
}
function webServer(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlCode);
}

//instância Client de HTTP
http.get(options, httpClient).on("error", httpError);
//Instância de servidor
http.createServer(webServer).listen(3000);
console.log(`Servidor rodando em http://localhost:3000/`);
