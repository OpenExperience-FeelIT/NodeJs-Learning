const { log } = require("console");
const { readFileSync, writeFileSync, read } = require("fs");
log('reading')
//for (i = 0; i <= 100000; i++)
function reading() {
  //reading the files
  log('reading started')

  var firstFileContent = readFileSync("./TextContent/first.txt", "utf-8");

  //sleep for 10000
  

  log(`first process middle`);

  //reading the files
  var againFirstFileContent = readFileSync("./TextContent/first.txt", "utf-8");

  //sleep for 10000
  log('reading over')

  setInterval(()=>{reading()}, 2000)
}
reading();
log('log reading')
