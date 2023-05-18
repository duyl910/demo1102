const http = require("http")
const port = process.env.PORT || 3001;
const fs = require('fs') //fs file system
const server = http.createServer((req, res)=>{
    switch(req.url){
        case '/':
            fs.readFile("index.html", (err, data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.write(data)
                    res.end()
                }
            })
            break
        case '/hanoi':
            fs.readFile("hanoi.html", (err, data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.write(data)
                    res.end()
                }
            })
            break
        case '/hcm':
            fs.readFile("hcm.html", (err, data)=>{
                if(err){
                    console.log(err)
                }else{
                    res.write(data)
                    res.end()
                }
            })
            break
        default:
            fs.readFile("404.html", (err,data)=>{
                if(!err){
                    res.write(data)
                    res.end()
                }
            })    
    }
})
server.listen(port, () =>{
    console.log("web server is running at http://localhost:"+port)
})