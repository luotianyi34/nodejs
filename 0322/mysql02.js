const connection = require("../util/db");
let sql = "insert into userinfo values (null,?,?,?,?)";
connection.query(sql,["xuzhou","xuzhou","徐州",1],function (e,r) {
    if(e) throw e;
    if(r.affectedRows === 1){
        console.log("添加成功！")
    }
});

