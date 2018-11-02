function ProductModule() {
    //初始化数据库
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
    //增加商品
    this.insertProduct = function (product, call) {
         //(1),编写sql语句
        var userAddSql = 'INSERT INTO product(name,sizeSelect_id,colorSelect_id,textarea,productPrice,image_key,image_url) VALUES(?,?,?,?,?,?,?)';
        var userAddSql_Params = [product.name, product.sizeSelect,product.colorSelect,product.textarea,product.productPrice,product.key,product.image_url];
        //(2),进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句2，userAddSql_Params，sql语句中的值3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        // console.log("userAddSql_Params:"+userAddSql_Params);
        this.connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
        //(3),连接结束
        this.connection.end();
    };
    //查询商品
    this.selectProduct = function (product,call) {
        //编写数据库语句
        var sql = "SELECT * from product where name ='"+product.productType+"'";
        //(2),进行插入操作
        this.connection.query(sql,function (err , result) {
           if (err){
               console.log('[SELECT ERROR] - ', err.message);
               return;
           }

            call(result);

        });
        //(3),连接结束
        this.connection.end();
    };
    //修改产品的时候，进行查询操作
    this.selectProduct2 = function (product,call) {
        // console.log(product.productType);
        //编写数据库语句
        var sql = "SELECT * from product where id ='"+product.productType+"'";
        //(2),进行插入操作
        this.connection.query(sql,function (err , result) {
            if (err){
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            // console.log(result);
            call(result);

        });
        //(3),连接结束
        this.connection.end();
    };
//    删除商品
    this.deleteProduct = function (product,call) {
        // console.log(product.productId);
        var sql = "DELETE FROM product WHERE id='"+product.productId+"'";
        //(2),进行插入操作
        this.connection.query(sql,function (err , result) {
            if (err){
                console.log('[SELECT ERROR] - ', err.message);
                return;
            }
            // console.log(result);
            call(result);
        });
        //(3),连接结束
        this.connection.end();
    };
    //修改商品时，按照产品ID进行的插入操作
    this.insertProduct2 = function (product, call) {
        //(1),编写sql语句
        // console.log(product.num);
        var userAddSql = `UPDATE product SET name='${product.name}',sizeSelect_id='${product.sizeSelect}',colorSelect_id='${product.colorSelect}',textarea='${product.textarea}',
        productPrice='${product.productPrice}',image_key='${product.key}',image_url='${product.image_url}' WHERE id = ${product.num}`;
        //(2),进行插入操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句2，userAddSql_Params，sql语句中的值3，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        // console.log("userAddSql_Params:"+userAddSql_Params);
        this.connection.query(userAddSql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            // console.log(result);
            call(result);
        });
        //(3),连接结束
        this.connection.end();
    }
}

module.exports = ProductModule;