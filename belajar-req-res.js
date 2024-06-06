const http = require('http')
const port = 3000

let server = http.createServer(function(request, respond) {
    if (request.url == '/'){
        respond.writeHead(200, {'content-type': 'text/html'})
        respond.write('<h1>SELAMAT DATANG DI HALAMAN UTAMA<\h1>')
        respond.end()
    } else if (request.url == '/beranda'){
        respond.writeHead(200, {'content-type': 'text/html'})
        respond.write('<h1>SELAMAT DATANG DI BERANDA<\h1>')
        respond.end()
    } else if(request.url == '/about'){
        respond.writeHead(200, {'content-type': 'text/html'})
        respond.write('<h1>SAYA ELANG DARI TANGERANG YANG MEMBUAT WEBSITE INI<\h1>')
        respond.end()

    } else if(request.url == '/file'){
        respond.writeHead(200, {'content-type': 'text/html'})
        respond.write('<h1>FILE BELAJAR REQ-RES<\h1>')
        respond.end()

    } else{
        respond.writeHead(404, {'content-type': 'text/html'})
        respond.write('<h1>HALAMAN TIDAK DITEMUKAN<\h1>')
        respond.end()
    }
})

server.listen(port,()=>{
    console.log(`server sudah on, buka http://localhost:${port}`)
})