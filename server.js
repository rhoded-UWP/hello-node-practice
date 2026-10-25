import http from 'node:http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    console.log(request.method, request.url);
    response.writeHead(200, { 'Content-Type': 'text/plain', charset: 'utf-8' });
    response.end('Hello, World! This message came from my Node.js server.\n');
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
