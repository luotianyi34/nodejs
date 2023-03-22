const http = require("http");
const url = require("url")
http.createServer(function (req,res) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    req.setEncoding("utf-8");
    res.writeHead(200,{"Content-Type":"application/json;charset=utf-8"});
    /*解析请求地址后的参数*/
    const param = url.parse(req.url,true).query;
    let obj;
    if(param.username === "admin" && param.password === "123456"){
         obj= {
            code:200,
            msg:"success"
        }
    }else{
        obj = {
            code:500,
            msg:"error"
        }
    }

    const json = JSON.stringify(obj);
    res.end(json);
}).listen(6673);
