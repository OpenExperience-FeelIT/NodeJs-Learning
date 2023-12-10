const { log } = require('console')
const os = require('os')

const user = os.userInfo()
var systemUpTime = os.uptime()
var currentOs = {
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
    Endianness : os.endianness(),
    machines : os.machine(),
    hostName : os.hostname(),
    availableParallism : os.availableParallelism(),
    loadavv : os.loadavg()
}

console.log(user);
console.log();
console.log(`System Uptime : ${systemUpTime}`);
console.log();
console.log(`Operating system details : `)
console.log(currentOs)