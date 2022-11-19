"use strict";
var fs = require("fs"),
  readStream = fs.createReadStream("assets/nomes.txt"),
  writeStream = fs.createWriteStream("assets/nomes_copia02.txt");

readStream.pipe(writeStream);

readStream.on("data", (chunk) => {
  console.log("He leido: " + chunk.length + " caracteres");
});

readStream.on('end',()=>{
  console.log('Terminei de ler o arquivo');
})
