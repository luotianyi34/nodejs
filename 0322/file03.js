const fs = require("fs");
fs.readFile("boqi.jpg",function (err,data) {
    if(err){
        console.error(err)
    }else {
        fs.writeFile("qwe.jpg",data,function (err) {
            if(err){
                console.error(err)
            }else{
                console.log("文件复制成功!")
            }
        })
    }
});
