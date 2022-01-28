const path = require("path");
//console.log(path.sep);

const file = path.join("fol", "subfol", "test.txt");
//console.log(file);

var base = path.basename(file);
console.log(base);

var abs = path.resolve(__dirname, "fol", "subfol", "test.txt");
console.log(abs);
