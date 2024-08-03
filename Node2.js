 //for Async Writing on a file
const fs = require("fs");
/*fs.writeFile("./test.txt", "hello there", (err) => {}); */

// for Async Reading 
/*fs.readFile("./test.txt","utf-8", (err,result)=>{
  if(err){
    console.log("Error", err);
  } else {
    console.log(result);
  }
}); */
 
//fs.appendFileSync("./test.txt", `${Date.now()} HELLO THERE\n`);
fs.mkdirSync("my-docs/a/b", {recursive : true});