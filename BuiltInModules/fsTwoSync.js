const {log} = require('console')
const {readFileSync, writeFileSync} = require('fs')

console.log('writing')
//for(i=0; i<=1000000; i++)
function writing()
{
//writing into first file
log('writing start')

writeFileSync('./TextContent/first.txt', '\nsuccess formula: Node will be completed this week', {flag:'a'})

log('middle of writing')

writeFileSync('./TextContent/first.txt', '\nI can complete the node content by tommorrow.', {flag:'a'})

log('writing over')
setInterval(()=>{writing()}, 10)
}
writing();
console.log('log  writing')