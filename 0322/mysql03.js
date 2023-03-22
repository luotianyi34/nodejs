const connection = require("../util/db")
let sql = "update userinfo set username = ? ,password = ?,nickname = ?,status = ? where  id = ?";
connection.query(sql,["nanjing","nanjing","南京",2,23],function (e,r) {
    if(e) throw e;
    console.log(r)
})
