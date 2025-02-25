const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/html' });
    if(req.url ==='/getdata' && req.method === 'GET')
    {
        const data = {name: 'John Doe', age: 25};
        res.end(JSON.stringify(data));
    }
    else if(req.url ==='/setdata' && req.method === 'POST')
    {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newdata = JSON.parse(body);
            console.log(`new data received: ${JSON.stringify(newdata)}`);
            res.end('Data received');
        });    
    }
});

server.listen(9000, () => {
    console.log('Server running at port 9000');
})    