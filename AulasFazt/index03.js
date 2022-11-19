const fs = require("fs");
/*
fs.writeFile("./texto.txt", "linea uno", function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Archivo creado");
});
console.log("ultima linea de codigo");*/
/*Consultar base de dados com Node de maneira assíncrona*/
/*query('Select * FROM Users',function(err,users){
    if(err){
        console.log(err);
    }
    if(users){

    }
})
*/

fs.readFile("./texto.txt", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
console.error("Teste");
