/*加载http模块*/
const http = require("http");
/*
* 创建Http服务
* */
http.createServer(function (request,response) {
    /*处理中文乱码*/
    request.setEncoding("utf-8");
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    if(request.url !== "/favicon.ico"){
        /*输出内容*/
        response.write("你好，我是纯文本内容");
        response.write("<h3>我是H3标签</h3>");
        console.log(request.url)
        /*关闭输出流
        * end函数也可以有参数，也表示输出内容，但是end函数只能调用一次。
        * end函数可以不写，但是会导致页面一直处于加载状态
        * */
        response.end("end");
    }
}).listen(8888);/*监听端口，范围值：0-65535，但是1024之前的端口号禁止使用！*/
console.log("server启动成功！\nhttp://localhost:8888")
