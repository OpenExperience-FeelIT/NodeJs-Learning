const {log} = require("console")
const {readFile, writeFile} = require('fs')

log('before reading')
readFile('./TextContent/first.txt', 'utf8', (err, result)=>{
    log('inside reading')
    // if(err)
    // {
    //     log('inside if block reading')
    //    // log(err)
    //     return
    // }
    // log('after if bloack reading')
    // log(result);
    if (err) {
        log('inside if block reading')
        log(err);
        return;
      }
      log('after if bloack reading')
      var first_content = result;
      log(first_content);
      log('second if bloack reading')
      return;
})
log('completed reading')



// readFile("./TextContent/first.txt", 'utf-8', (err, result) => {
//     //reading first file
//     if (err) {
//       log(err);
//       return;
//     }
//     var first_content = result;
//     log(first_content);
//     writeFile("./TextContent/result-async1.txt", first_content, { flag: "a" }, (err, writeresult) => {
//         //writing into resulttant file
//         if (err) {
//           log(err);
//           return;
//         }
//         log(writeresult);
//         readFile("./TextContent/second.txt", "utf8", (err, secondreadresult) => {
//           //reading second file
//           if (err) {
//             log(err);
//             return;
//           }
//           log(secondreadresult);
//         });
//       }
//     );
//   });
  