"use strict";
var EventEmitter = require("events").EventEmitter,
  pub = new EventEmitter();

/*
pub.on("myevent", function (message) {
  console.log(message);
});
pub.once("myevent", function (message) {
  console.log("Se emite la primera vez " + message);
});
pub.emit("myevent", "Soy un emissor de eventos");
*/

pub
  .on("myevent", function (message) {
    console.log(message);
  })
  .once("myevent", function (message) {
    console.log("Se emite la primera vez: " + message);
  })
  .emit("myevent", "Soy un emissor de eventos");
pub.emit("myevent", "Volviendo a emitir");
pub.removeAllListeners("myevent");
pub.emit("myevent", "Volviendo pela terceira vez");//não será executado
