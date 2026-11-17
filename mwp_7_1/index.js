const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log("there's a request");
    // console.log(req);
    console.log(req.method);

    /*
    res.setHeader("Content-Type", "text/plain");

    res.write("Hello, Node")
    res.end();
    */

    /*
    res.setHeader("Content-Type", "text/html");
    const readStream = fs.createReadStream(__dirname+"/index.html", "utf-8")
    readStream.pipe(res)
    */

    const {method, url} = req
    if(method === "GET" && url === "/home"){
        res.statusCode = 200
        res.end("HOME")
    }else if(method === "GET" && url === "/about"){
        res.statusCode = 200
        res.end("ABOUT")
    }else{
        res.statusCode = 404
        res.end("NOT FOUND")
    }
});

server.listen(3000, ()=>{
    console.log("server is listening at port 3000");
});