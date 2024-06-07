const http = require('http')
const fs = require('fs')
const port = 3000

let server = http.createServer(function(request, respond) {
    if (request.url == '/'){
        respond.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream('./view/utama.html').pipe(respond)
    } 
    else if (request.url == '/beranda'){
        respond.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream('./view/beranda.html').pipe(respond)
  
    } 
    else if(request.url == '/about'){
        respond.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream('./view/about.html').pipe(respond)

    } else if(request.url == '/file'){
        respond.writeHead(200, {'content-type': 'text/html'})
        fs.createReadStream('./view/file.html').pipe(respond)

    } else{
        respond.writeHead(404, {'content-type': 'text/html'})
        fs.createReadStream('./view/error.html').pipe(respond)
    }
})

server.listen(port,()=>{
    console.log(`server sudah on, buka http://localhost:${port}`)
})