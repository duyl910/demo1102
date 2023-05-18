//1. Khai báo và import thư viện http
const http = require('http')
//2. Khai báo host(server)
const host = 'local host'
//3. Khai báo server port(default: 3000)
const port = 3000
//4. Tạo server 
const server = http.createServer((request, respond)=>{
    respond.write("<h1 style='color: red'>This is NodeJS web server</h1>")
    respond.write("<h2 style='color:blue'>This is NodeJS web server</h2>")
    respond.end("<img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fvtv.vn%2Fxa-hoi%2Fsinh-vien-nem-trai-dang-sau-con-loc-game-tai-xiu-online-20221018155209901.htm&psig=AOvVaw0qXQWXV1DsvyVyE3PvRx6n&ust=1684468157733000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiq9oP7_f4CFQAAAAAdAAAAABAE'>")
})
//5. Chạy server bằng cách listen port
server.listen(port, ()=>{
    console.log('http://localhost'+port)
})