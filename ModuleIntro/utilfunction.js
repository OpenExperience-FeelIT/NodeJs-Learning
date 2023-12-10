const sharablefunction = (variable)=>{
    console.log(`Hi! ${variable}, this is sharable function.`)
}

const localfunction = (variable)=>{console.log('Hi! ${variable}, this is local function.')}

module.exports = sharablefunction

