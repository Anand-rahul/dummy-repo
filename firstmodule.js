var names = require("./1-module");
var sayHi = require("./5-utils");
require("./2-mid-g");

console.log(names);

sayHi("rahul");
sayHi(names.john);
sayHi(names.pete);
