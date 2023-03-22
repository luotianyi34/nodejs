const fs = require("fs");
/*打开流*/
const stream = fs.createReadStream("login.html","utf-8");
/*监听data事件*/
stream.on("data",function (c) {
    console.log(c)
});
stream.on("end",function () {
    console.log("内容读取完毕")
})
stream.on("error",function (e) {
    console.error(e)
})
