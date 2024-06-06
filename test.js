// cara membuat server
const http = require ('http')

let server = http.createServer((req,res)=>{
    console.log('tes')
    res.writeHead(279, {'content-type': 'text/plain'})
    // 200 itu status code
    res.end('Hello World')
})
    // 3000 itu port
server.listen(3000,()=>{
    console.log('server sudah siap jalan')
})
