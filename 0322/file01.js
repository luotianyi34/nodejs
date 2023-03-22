/*
* nodejs中的代码，绝大部分都是异步代码。
* fs模块比较特殊，提供了同步处理文化和异步处理文件的两种方式。
* */


/*引入fs模块*/
const fs = require("fs")
/*
* readFile的函数参数列表(异步读取)
* 1.要读取的文件地址(可以是绝对路径，也可以是相对路径)
* 2.配置选项(在读取文本文件时需要设置编码格式，读取二进制文件时忽略)
* 3.回调函数(参数列表为错误信息和读取到的内容)
* */
fs.readFile("D://hello.txt","utf-8",function (err, data) {
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
});
/*
* readFileSync函数的参数列表(同步)
* 1.要读取的文件地址
* 2.配置选项
*
* 同步读取文件推荐使用try-catch捕获异常来处理文件的报错
* */
try{
    const data = fs.readFileSync("show.json","utf-8")
    console.log(data)
}catch (e) {
    console.error(e)
}


