import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.readFile('./public/index.html', (err, data) => {
        res.end(data);
    });
});

server.listen(9100, () => {
    console.log('Server is running on port 9100');
});