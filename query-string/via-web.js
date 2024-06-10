const http = require('http')
constURL = require('url')
const qs = require('querystring')
const port = 3000

let server = http.createServer(function (req, res) {
    let url_asli = req.url
    let url_querystring = URL.parse(url_asli).query
    let url_object = qs.parse(url_querystring)
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(
        `<h1>nama saya adalah ${url_object.nama}, bekerja sebagai ${url_object.pekerjaan} </h1>`
    )
    res.end()
}
)

server.listen(port, () => {
    console.log(`server on `)
})