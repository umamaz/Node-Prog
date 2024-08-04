const http = require("http");
const myServer = http.createServer((req,res)=>{
  console.log("New request Received");
  res.end("Hello from Server");
});

//Assigning Port to the server
myServer.listen(8000, ()=> console.log("Server Started"));