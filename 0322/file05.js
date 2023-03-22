const fs = require("fs");
const rs = fs.createReadStream("D:\\记录\\OneDrive\\学校资料\\徐海学院\\2022-2023-2\\07.NodeJs程序设计与开发-48课时-嵌入式20-1\\录屏\\01.helloworld和npm安装模块.mp4");
const ws = fs.createWriteStream("D:\\npm.mp4");

rs.on("data",function (c) {
    console.log("c")
    ws.write(c);
})
rs.on("end",function () {
    ws.end();
})
