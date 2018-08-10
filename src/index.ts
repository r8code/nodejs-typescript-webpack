import * as http from 'http';

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Heelllooo woorld');
}).listen(8080);

console.log('server started');
