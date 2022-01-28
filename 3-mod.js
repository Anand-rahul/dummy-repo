var os = require("os");

//info bout current user
var user = os.userInfo();
console.log(user);

//method returns system uptime

console.log(`The system uptime is ${os.uptime()} seconds`);

var curr = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(curr);
