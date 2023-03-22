const http = require("http");
http.createServer(function (req,res) {
    req.setEncoding("utf-8");
    res.writeHead(200,{"Content-Type":"application/json;charset=utf-8"});
    const obj = {
        code:200,
        msg:"success"
    }
    const json = JSON.stringify(obj);
    res.end(json);
}).listen(8999);
