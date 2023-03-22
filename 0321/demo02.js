/*
* require函数的参数
* 写包名则表示引用的是通过npm安装的模块
* 写相对路径表示引用自定义的模块
* */
const d1 = require('./demo01')
d1.f1();
d1.f2();

function f1() {
    console.log(d1.msg)
}
f1();
