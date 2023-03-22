const fs = require("fs");
/*
* writeFile函数参数列表
* 1、要写入的文件地址（可以是已经存在的，也可以是不存在的）
* 2.写入的内容（覆盖行为）
* 3、回调函数
*
* */
fs.writeFile("E:hello2.txt","我喜欢吃屎",function (err){
    if (err){
        console.error(err)
    }else{
        console.log("写入完成")
    }
});

fs.writeFileSync("show2.json","想吃东台鱼汤面了")
