exports.index = (req,res)=>{
    var state = -1;
    if(req.session.sign)
        state=2;
    // console.log(req.session.sign);
    res.render('index',{state:state});
};
//登录成功验证
exports.userLogin = function (req,res) {
//1,解析客户端提交的数据
    var name  = req.body.name;
    var password  = req.body.password;
    //2,验证用户是否合法
    //(1)引入userService
    let LoginService = require('../Service/LoginService');
    //(2)创建对象
    let loginService = new LoginService();
    loginService.init();
    loginService.checkUser(name,password,function(result){
        if(result.state==2)
            req.session.sign=true;
        // console.log("state=:"+result.state);
        // console.log(req.session.sign);
        res.json(result);
    });
};


//首页轮播
exports.homeSlide=function(req,res){

    //(1)引入MySQL模块
    var mysql = require('mysql');
    //(2)创建一个connection
    var connection = mysql.createConnection({
        host: 'localhost',       //主机 ip
        user: 'root',            //MySQL认证用户名
        password: '123456',                //MySQL认证用户密码
        port: '3306',                 //端口号
        database: 'wetgrade'          //数据库里面的数据
    });
    //(3),连接
    connection.connect();
    //(4),编写sql语句
    var picGetSql = "SELECT * FROM swiper";
    //4,进行查询操作
    connection.query(picGetSql, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        // res.end(JSON.stringify(result));
        res.json(result);
    });
};



//更新首页图片

exports.updatePic=function(req,res){

    //(1)引入MySQL模块
    var mysql = require('mysql');
    //(2)创建一个connection
    var connection = mysql.createConnection({
        host: 'localhost',       //主机 ip
        user: 'root',            //MySQL认证用户名
        password: '123456',                //MySQL认证用户密码
        port: '3306',                 //端口号
        database: 'wetgrade'          //数据库里面的数据
    });
    //(3),连接
    connection.connect();
    //(4),编写sql语句
    var picGetSql = "SELECT * FROM hotproduct";
    //4,进行查询操作
    connection.query(picGetSql, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        // res.end(JSON.stringify(result));
        res.json(result);
    });
};

exports.newsPic=function(req,res){

    //(1)引入MySQL模块
    var mysql = require('mysql');
    //(2)创建一个connection
    var connection = mysql.createConnection({
        host: 'localhost',       //主机 ip
        user: 'root',            //MySQL认证用户名
        password: '123456',                //MySQL认证用户密码
        port: '3306',                 //端口号
        database: 'wetgrade'          //数据库里面的数据
    });
    //(3),连接
    connection.connect();
    //(4),编写sql语句
    var picGetSql = "SELECT * FROM newproduct";
    //4,进行查询操作
    connection.query(picGetSql, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        // res.end(JSON.stringify(result));
        res.json(result);
    });
};