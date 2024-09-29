// const http = require("http");
// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type": "text/html"})
//     res.end ("how are you doing")
// }

// )
// .listen("5000")
// console.log("the port is running at 5000")

// const http = require('http');

// const fs = require('fs');

// http.createServer((req, res)=>{
    // fs.readFile('login.html', (err, data)=>{
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // if (err) console.log(err)
        // /res.write(data);
        // return res.end();
    // })
//}).listen("5000")
// console.log("the port is running at 5000")
const http= require('http');

const fs = require('fs');
http.createServer((req,res)=>{
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    } )
}
)
.listen("5000")
console.log('the port is running at 5000')