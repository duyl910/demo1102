const http = require("http")
const server = http.createServer((req, res)=>{
    res.end("Cloud Computing - GCH1102")
})
server.listen(port, ()=>{
    console.log('http://localhost'+port)
})