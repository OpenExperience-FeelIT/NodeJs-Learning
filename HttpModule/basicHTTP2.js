const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res)=>{
  //  log(req)

    if(req.url === "/")
    {
        res.end("We are at sdgf page.")
        return
    }else if(req.url === "/about")
    {
        res.end("a small intro abt me")
        return
    }res.end(`<h2>OOPs</h2>
        <p>No data gofund</p>
         <a href="/">Back</a>`)
        
    
})

server.listen(5000)