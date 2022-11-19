"use strict";
var fs = require("fs"),
  file = "./assets/nomes.txt",
  newFile = "./assets/nomes-callback.txt";

/*fs.exists("./assets/nomes.txt", function (exists) {
  if (exists) {
    console.log("El archivo existe");
  } else {
    console.log("El archivo no existe");
  }
});*/

fs.access(file, fs.F_OK, function (err) {
  if (err) {
    console.log("El archivo no existe");
  } else {
    console.log("El archivo existe");
    fs.readFile(file, function (err, data) {
      if (err) {
        console.error(`El archivo no se pudo ler`);
      } else {
        console.log(`El archivo se ha leído exitosamente`);
        fs.writeFile(newFile, data, function (err) {
          return err
            ? console.log(`El archivo no se puedo copiar`)
            : console.log(`El archivo se ha copiado com éxito`);
        });
      }
    });
  }
});
