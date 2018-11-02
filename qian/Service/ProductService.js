function ProductService() {

    this.insertProduct=function (data,call) {
        // console.log(data)
        var ProductModule = require('../Modules/ProductModule');
        //(1) 创建对象
        var productModule= new ProductModule();
        productModule.init();
        var that = this;
        var data={
            name: that.crypto(data.name),
            password:that.crypto(data.password),
            email:data.email
        };
        //(2)数据操作

        this.checkUser(data,function(result) {
            if (result) {
                call(result);
            } else {
                productModule.insertProduct(data, function (result) {
                    var body = {
                        insertId: -1
                    }
                    if (result != null) {
                        body.insertId = result.insertId
                    }
                    call(body);
                })
            }
        })
    }
    this.signup=function(name,call){
        //(1)查询用户数据
        var ProductModule = require('../Modules/ProductModule');
        //(1) 创建对象
        var productModule= new ProductModule();
        productModule.init();

        productModule.signup(name,function(result){
            // console.log(result)
            call(result);
        })
    }
    this.checkUser=function(name,call){
        this.signup(name,function(result){
            if(result.length==0){
                call(false);
            }else{
                call(true);
            }
        });
    }
    this.login=function (data,call) {
        // console.log(data);
        var ProductModule = require('../Modules/ProductModule');
        //(1) 创建对象
        var productModule= new ProductModule();
        productModule.init();
        var that = this;
        var data={
            name: that.crypto(data.name),
            password:that.crypto(data.password)
        }
        //(2)数据操作
        productModule.login(data,function (result) {
            var body={
                insertId:-1
            }
            if(result!=null){
                body.insertId=result.insertId
            }
            call(body);
        })
    }
    this.crypto=function(data){
        var crypto = require('crypto');
        //2，生成口令的散列值，crypto模块功能是加密并生成各种散列，createHash(algorithm)方法 ,这是利用给定的算法生成hash对象
        var md5 = crypto.createHash('md5');
        //3,digest([encoding])方法，计算数据的hash摘要值，encoding是可选参数，不传则返回buffer (encoding可为 'hex'、'base64'等)；
        var buffer = md5.update(data).digest('hex');
        return buffer;
    }
}

module.exports=ProductService;