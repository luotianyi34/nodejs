/*加载工具包*/
const mini = require("minimist")
const params = mini(process.argv.splice(2));
console.log(params)