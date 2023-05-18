const http = require("http")
const host ='localhost'
const port = 3333
const server = http.createServer((req, res)=>{
    switch(req.url){
        case '/':
            res.write("<h1 style ='color: blue'>Homepage</h1>")
            res.write("<a href='/login'>Login</a><br>")
            res.write("<a href='/contact'>Contact</a><br>")
            res.write("<a href='/greenwich'>Greenwich</a><br>")
            res.end()
            break
        case '/login':
            res.end("<h1 style ='color: gray'>Login Page</h1>")
            break;
        case '/contact':
            res.end("<h1 style ='color: yellow'>Contact Page</h1>")
            break;
        default:
            req.end("<h1 style ='color: green'>404 not found</h1>")
            break;
    }
})
server.listen(port, ()=>{
    console.log('http://localhost'+port)
})