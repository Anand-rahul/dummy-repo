var fs = require("fs");

fs.readFile("./pol/pirst.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  var fir = result;
  fs.readFile("./pol/sec.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    var sec = result;
    fs.writeFile(
      "./pol/asyns-res.txt",
      `Here is the result: ${fir} + ${sec}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
