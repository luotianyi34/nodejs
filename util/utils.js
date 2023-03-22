module.exports = {
    getRandom(min=1,max=10){
        if (max===min){
            return min
        }
        if (min>max){
            [min,max]=[max,min]
        }
        return Math.floor(Math.random()*(max-min+1)+min);
    },
    getCode(len=4){
        let code = "";
        for (let i=0;i<len;i++){
            code+=getRandom(0,9)
        }
        return code;
    },
    commentServer(req,res){
        //设置允许跨域的域名，*代表允许任意域名跨域
        res.setHeader("Access-Control-Allow-Origin","*");
        req.setEncoding("utf-8");
        res.writeHead(200,{"Content-Type":"application/json;charset=utf-8"});
    }

}