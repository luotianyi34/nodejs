/*
* 在浏览器window是全局变量，所有的属性和方法默认都是挂载到window对象上的。
* nodejs中没有window的概念，他的全局对象是global
* */

console.log("当前文件地址：",__filename)
console.log("当前文件目录：",__dirname)