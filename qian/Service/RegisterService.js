function RegisterService() {
    this.insert = function (name,password,email,call) {
        var resData={
            insertId:-1,
            msg:''
        };
        var password=this.crypto(password);
    //  引入module模块
        var RegisterModule = require('../Modules/RegisterModule');
        var registerModule = new RegisterModule();
        registerModule.init();
        //(4)查询用户数据
        registerModule.selectUserByName(name,function(result){
            // console.log(name)
            //1,获得数组的长度
            var length = result.length;
            if(length==0){
                //(2)长度为0，说明用户不存在，就插入用户数据
                registerModule.insertUser(name,password,email,function (data) {
                    resData.msg="注册成功";
                    resData.insertId=data.insertId;
                    call(resData);
                })
            }else{
                //(3)长度不为0，说明用户存在，给用户提示
                resData.msg="用户已经存在！"
                call(resData);
            }
        });
    }
//    用户注册是加密
    this.crypto=function(data){
        var crypto = require('crypto');
        //2，生成口令的散列值，crypto模块功能是加密并生成各种散列，createHash(algorithm)方法 ,这是利用给定的算法生成hash对象
        var md5 = crypto.createHash('md5');
        //3,digest([encoding])方法，计算数据的hash摘要值，encoding是可选参数，不传则返回buffer (encoding可为 'hex'、'base64'等)；
        var buffer = md5.update(data).digest('hex');
        return buffer;
    }
}
module.exports=RegisterService;