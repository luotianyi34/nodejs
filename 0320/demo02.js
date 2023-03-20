const params = {};
process.argv.splice(2).forEach(item=>{
    const ps = item.split("=");
    const key=ps[0];
    const value = ps[1];
    params[key] = value;
})
console.log("参数列表为：",params);