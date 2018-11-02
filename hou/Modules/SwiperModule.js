function SwiperModule() {
    this.init = function () {
        var mysql = require('mysql');  //调用MySQL模块
        //1，创建一个connection
        this.connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '123456',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'myone'          //数据库里面的数据
        });
        //2,连接
        this.connection.connect();
    };
    //查询
    this.selectProduct = function (product,call) {
        //编写数据库语句
        var sql = "SELECT * from students";
        //(2),进行插入操作
        this.connection.query(sql,function (err , result) {
            if (err){
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            console.log(result);
            call(result);
        });
        //(3),连接结束
        this.connection.end();
    }
}
module.exports = SwiperModule;