function ProductModule() {
    this.init = function () {
        var mysql = require('mysql');  //调用MySQL模块
        //1，创建一个connection
        this.connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'signup'          //数据库里面的数据
        });
        //2,连接
        this.connection.connect();
    }
    this.signup=function (product, call) {
        var aaa = 'select * from signup where name="'+product.name+'"'
        var that = this
        this.connection.query(aaa,function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
                call(result);
        });
        // (3),连接结束
        this.connection.end();
    }
    this.insertProduct = function (product, call) {
        // console.log(product)
         //(1),编写sql语句
        var userAddSql = 'INSERT INTO signup (name,password,email) VALUES(?,?,?)';
        var userAddSql_Params = [product.name,product.password,product.email];
        //(2),进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，userAddSql_Params，sql语句中的值
         * 3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        console.log("userAddSql_Params:"+userAddSql_Params);

        this.connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
        // (3),连接结束
        this.connection.end();
    }



    this.login = function (product,call) {
        // console.log(product.password+"123");
        // name: 'df', password: 'dfgsdfg'
        var userAddSql = "SELECT password FROM signup WHERE name='"+product.name+"'";
        //
        // console.log("userAddSql_Params:"+userAddSql_Params);
        //
        this.connection.query(userAddSql, function (err, result) {
            console.log(result);

            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            // console.log(product.password);
          if (result==''){
              var body = {
                  insertId : 0
              }
              call(body);
            }else  if (result[0].password == product.password){
                var body = {
                    insertId : 1
                }
                call(body);
            }else  if (result[0].password != product.password){
              var body = {
                  insertId : 2
              }
              call(body);
          }


        });
        // //(3),连接结束
        this.connection.end();
    }
}
module.exports = ProductModule;