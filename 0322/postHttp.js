const http = require("http");
const querystring = require("querystring")
const utils = require("../util/utils")

http.createServer(function (req, res) {
    utils.commentServer(req,res);
    /*post请求的参数需要通过监听data的事件来获取内容,data事件可能会触发多次*/
    let post = '';
    req.on("data",function (content) {
        post += content;
    });

    /*监听end事件表示参数处理完毕*/
    req.on("end",function (){
        console.log(post);
        post = querystring.parse(post);
        console.log(post);
        let obj={};
        if(post.username === "admin" && post.password === "123456"){
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
    })
}).listen(9876)
