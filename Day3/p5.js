const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => { 
    try {
        const data = await fs.readFile("./data.json", "utf-8"); 
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        res.end(data);
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.listen(9000, () => {
    console.log('Server is running on port 9000'); // Correct port in log message
});