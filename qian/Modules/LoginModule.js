function LoginModule(){
    //对象初始化
    this.init=function(){
        //(1)引入MySQL模块
        var mysql  = require('mysql');
        //(2)创建一个connection
        this.connection = mysql.createConnection({
            host     : 'localhost',       //主机 ip
            user     : 'root',            //MySQL认证用户名
            password : '123456',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database:'wetgrade'          //数据库里面的数据
        });
        //(3),连接
        this.connection.connect();
    };
    this.selectUserByName=function(name,call){
        //(4),编写sql语句
        var  sql = "SELECT * FROM user where userName='"+name+"'";
        //4,进行查询操作
        this.connection.query(sql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            // console.log(result[0].userPassword);
            call(result);
        });
        //5,连接结束
        this.connection.end();
    }
}
module.exports=LoginModule;