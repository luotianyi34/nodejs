function f1() {
    console.log("f1")
}

function f2() {
    console.log("f2")
}

/*标记导出的内容：exports表示的是该文件中所有可以能被导出的值*/
module.exports = {
    f1,f2,
    msg:"Hello World"
};
/*
* module.exports出现多次，后面的覆盖前面的
* 希望一次导出多个内容时，指定内容为对象即可
* */
// module.exports = "hello world";
