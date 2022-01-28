const { readFileSync, writeFileSync } = require("fs");
var fs = require("fs");

var fir = readFileSync("./pol/pirst.txt");
var sec = readFileSync("./pol/sec.txt");

console.log(fir + sec);

writeFileSync("./pol/res.txt", `Here is the result ${fir + sec}`, {
  flag: "a",
});
