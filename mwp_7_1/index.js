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
   res.setHeader("Content-Type", "text/html");
   const readStream = fs.createReadStream(__dirname+"/index.html", "utf-8")
   readStream.pipe(res)
});

server.listen(3000, ()=>{
    console.log("server is listening at port 3000");
});