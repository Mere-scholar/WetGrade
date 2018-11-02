function AdminLoginModule(){
    this.init = function () {
        var mysql = require('mysql');  //调用MySQL模块
        //1，创建一个connection
        this.connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '123456',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'wetgrade'          //数据库里面的数据
        });
        //2,连接
        this.connection.connect();
    };
    this.selectUserByName=function(name,call){
        //1,编写sql语句
        var  userGetSql = "SELECT adminPassword from admin where adminName ='"+name+"'";
        //2,进行查询操作
        this.connection.query(userGetSql,function (err, result) {
            if(err){
                console.log('[select ERROR] - ',err.message);
                return;
            }
            call(result);
        });
    }
    this.insertUser=function(name,password,call){
        //(1)执行插入
        var  sqlInsert = 'INSERT INTO admin(adminName,adminPassword,created_at,updated_at) VALUES(?,?,?,?)';
        var date = new Date();
        var  paramsInsert = [name,password,date,date];
        this.connection.query(sqlInsert,paramsInsert,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            call(result);
        });
    }
}
module.exports=AdminLoginModule;