const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/COMP4537/labs/4/store.html' || req.url === '/') {
        fs.readFile('./store.html', 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end();
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(content);
            }
        });
    } else if (req.url === '/COMP4537/labs/4/search.html') {
        fs.readFile('./search.html', 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end();
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end(content);
            }
        });
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});