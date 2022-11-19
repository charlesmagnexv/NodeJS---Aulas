"use strict";
var buf = new Buffer(100),
  buf2 = new Buffer(26),
  str = "\u00bd + \u00bc = \u00be";
buf.write("abcd", 0, 4, "ascii");
console.log(buf, buf.toString("ascii"), str, str.length + " caracteres");
console.log(Buffer.byteLength(str, "utf8") + " bytes"); //a nível de memória de servidor, a string tem um tamanho diferente

for (let i = 0; i < buf2.length; i++) {
  //97 em ascii é a letra 'a'
  buf2[i] = i + 97;
}
console.log(buf2.toString("ascii"));
