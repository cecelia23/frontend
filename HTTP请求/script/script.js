const http = require('http');

http.createServer((request, response) => {
    console.log('request url', request.url);
    response.writeHead(200, {
       'Content-Type': 'text/javascript',
       'Cache-Control': 'max-age=300' 
    });
    response.end('console.log("script changed")');
}).listen(8888);