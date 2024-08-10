

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} Request received\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("./text.txt", log,(err) => {
        if(err) throw err;
        switch(req.url){
            case '/':
                res.end("Hello from HomePage");
                break;
            case '/about':
                res.end("Hello from about");
                break;  
            default:
                res.end("404 error found");  
        }
            
    });
});

myServer.listen(8000, () => {
    console.log("Server Started");
});