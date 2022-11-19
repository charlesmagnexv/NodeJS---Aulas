"use strict";

const { kMaxLength } = require("buffer");

var http = require("http").createServer(serverUpload),
  util = require("util"),
  formidable = require("formidable"),
  fse = require("fs-extra");

function serverUpload(req, res) {
  if (req.method.toLowerCase() == "get" && req.url == "/upload") {
    let form = `
        <h3>Uploader de Archivos en Node.js</h3>
        <form action="/upload" enctype="multipart/form-data" method="post">
            <div><input type="file" name="upload" required></div>
            <div><input type="submit" name="Subir Arquivo" required></div>
        </form>
        `;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form);
  }
  if (req.method.toLowerCase() == "post" && req.url == "/upload") {
    let form = new formidable.IncomingForm();
    form
      .parse(req, function (err, fields, files) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          "<h1>Arquivos Recebido</h1><a href=" / ">Voltar</a>" +
            util.inspect({ files: files })
        );
        res.end();
      })
      .on("progress", function (bytesReceived, bytesExpected) {
        let percentCompleted = (bytesReceived / bytesExpected) * 100;
        console.log(percentCompleted.toFixed());
      })
      .on("error", function (err) {
        console.log(err);
      })
      .on("end", function (fields, files) {
        let tempPath = this.openedFiles[0].path,
          fileName = this.openedFiles[0].name,
          newLocation = "./upload" + fileName;

        fse.copy(tempPath, newLocation, function (err) {
          return err ? console.log(err) : console.log("Sucesso");
        });
      });
    return;
  } //err = erro, fields = campos, files = arquivos
}
http.listen(3000);
console.log("Server running at http: /localhost:3000/");
