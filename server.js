// const http=require('express');
// // const app=http.createServer()
// const app=http()

// const port=3000;

// app.listen(port,()=>{console.log(`Server is running at port :${port}`)})

// app.get("/",(req,res)=>{
//     res.send("hello")})


const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
        res.write('<head><title>ClassGuard</title></head>')
         res.write('<body>')
         res.write('<p>hello</p>')
         res.write('</body>')

     res.write('</html>')
})

server.listen(port,()=>console.log(`Server is running at port :${port}`))
