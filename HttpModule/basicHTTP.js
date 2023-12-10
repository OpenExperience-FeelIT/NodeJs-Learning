const http = require('http')                                //importing the http module
//creating our own basic server
const server = http.createServer((request, response)=>{     //creates the server with createServer method
    response.write("Welcome to my Web page")            // fill the response buffer with the message
    response.end()                                      // This stmt end the response buffer
})

server.listen(5050)                                     //making the server to listen to 5050 port