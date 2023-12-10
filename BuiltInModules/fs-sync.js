const {readFileSync, writeFileSync} = require('fs')

var firstlink = readFileSync('./TextContent/first.txt', 'utf-8')
console.log(firstlink);

writeFileSync('./TextContent/result.txt', 'Content of the resultant file', {flag:'a'})