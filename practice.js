const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Test', 'text/html')
    if (req.url === '/') {
        res.write(`
            < html >
<head>
    
    <title>Home</title>
</head>
<body>
    <a href="/home">home</a><a href="/men">men</a><a href="women">women</a><a href="/cart">cart</a>
    
</body>
</html > `)
        
    }
})
server.listen(3000)