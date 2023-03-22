const fs = require("fs");
const rs = fs.createReadStream(" D:");

const ws = fs.createWriteStream("D:");

rs.on("data",function(c){
    console.log("c")
    ws.write(c);
})
rs.on("end",function(){
    ws.end();
})
