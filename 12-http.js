const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('xuaaaaaaaaaaWelcome to our homepage');
    }
    if (req.url === '/about') {
        res.end('Here is our short history');
    }
    res.end(` <h1> OOps!! </h1> <p> We can't seem to finf the page < /p>
     <a href = "/" > back home < /a>`);
})
server.listen(5000);