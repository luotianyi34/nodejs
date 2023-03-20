console.log("日志打印")
/*用于输出多个对象的值*/
console.log("年龄",19);
console.log("年龄"+19);

console.info("信息")

/*在浏览器中会议红色标记*/
console.error("错误信息");
//nodejs中error输出后依然可以执行代码，浏览器中error后无法执行代码
console.log("abc");

console.log("------------")
const str = "ashuohaohcvouahouwh";
for (let i =0;i<str.length;i++){
    console.count(str[i]);
}

/*计算耗时：time()和timeEnd(f)*/

const f1 =()=>{
    setTimeout(()=>{
        console.timeEnd("f1()")//结束计时并输出
    },3000)
}

console.time("f1()");//开启计时
f1();

