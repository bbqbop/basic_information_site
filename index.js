const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(content, 'utf8')
            })
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8')
        }
    })
})


const PORT = 6500;

server.listen(PORT)
