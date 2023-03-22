const http = require("http");
const querystring = require("querystring")
const utils = require("../util/utils")
const mysql = require("mysql")
/*连接数据库*/
const connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"1234",
    database:"xuhai_wtr"
});
/*打开连接*/
connection.connect();


http.createServer(function (req, res) {
    utils.commentServer(req,res);
    /*post请求的参数需要通过监听data的事件来获取内容,data事件可能会触发多次*/
    let post = '';
    req.on("data",function (content) {
        post += content;
    });

    /*监听end事件表示参数处理完毕*/
    req.on("end",function (){
        post = querystring.parse(post);

        /*初始化SQL语句*/
        let sql = "select * from userinfo where username = ? and password = ?";
        /*执行查询操作
        * query函数表示查询
        * 1.执行的SQL
        * 2.占位符内容数组
        * 3.执行回调函数(1.错误信息2.查询结果3.数据库信息)
        * */
        connection.query(sql,[post.username,post.password],function (e,r,i) {
            const obj = {};
            if(e)throw e;
            console.log(i)
            if(r.length === 1){
                const user = r[0];
                if(user.status === 1){
                    obj.code = 200;
                    obj.msg = "success";
                }else{
                    obj.code = 500;
                    obj.msg = "该用户已被封禁";
                }
            }else{
                obj.code = 500;
                obj.msg="用户名或密码不正确";
            }
            connection.end();//关闭数据库
            res.end(JSON.stringify(obj));
        });
    })
}).listen(9876)
