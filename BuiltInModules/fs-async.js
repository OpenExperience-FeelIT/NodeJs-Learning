const { log } = require("console");
const { readFile, writeFile } = require("fs");

//reading files consecutivetely within a loop of callback functions.
//and after that writing into resultant file within the same callback function and that too using a callback function.

readFile("./TextContent/first.txt", "utf8", (err, result) => {
  //reading first file
  if (err) {
    log(err);
    return;
  }
  var first_content = result;
  log(first_content);
  writeFile("./TextContent/result-async1.txt", first_content, { flag: "a" }, (err, writeresult) => {
      //writing into resulttant file
      if (err) {
        log(err);
        return;
      }
      log(writeresult);
      readFile("./TextContent/second.txt", "utf8", (err, secondreadresult) => {
        //reading second file
        if (err) {
          log(err);
          return;
        }
        log(secondreadresult);
      });
    }
  );
});
