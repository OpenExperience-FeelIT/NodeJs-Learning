const path = require('path')

var systemPathDetails = {
    seperator : path.sep,
    pathJoiner : path.join('../Module', 'NameFolder', 'name.js'),
    basename : path.basename(path.join('../Module', 'NameFolder', 'name.js')),
    absoluteDirectory : path.resolve(__dirname),
    absolute : path.resolve(__dirname,'Modlue', 'nmae.txt')
}

console.log(systemPathDetails)