const fs = require("fs");
/*
* writeFile函数参数列表
* 1.要写入的文件地址(可以是已存在的地址，也可以是不存在的)
* 2.写入的内容(覆盖行为)
* 3.回调函数
* */
fs.writeFile("D://hello2.txt","nodeJs学习",function (err) {
    if(err){
        console.error(err)
    }else {
        console.log("写入完成")
    }
});

fs.writeFileSync("show2.json","我随便写的");
