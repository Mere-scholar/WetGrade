function adminLoginService(){
    this.insert=function(name,password,call){
        var resData={
            insertId:-1,
            msg:''
        }
        //(1)引入AdminLoginModule模块
        var AdminLoginModule =  require('../Modules/AdminLoginModule');
        //(2)创建对象
        var adminLoginModule =  new AdminLoginModule();
        //(3)对象初始化
        adminLoginModule.init();
        //(4)查询用户数据
        adminLoginModule.selectUserByName(name,function(result){
            //1,获得数组的长度
            var length = result.length;
            if(length==0){
                //(2)长度为0，说明用户不存在，就插入用户数据
                adminLoginModule.insertUser(name,password,function (data) {
                    resData.msg="注册成功";
                    resData.insertId=data.insertId;
                    call(resData);
                })
            }else{
                //(3)长度不为0，说明用户存在，给用户提示
                resData.msg="用户已经存在！"
                call(resData);
            }
        })
    }
}
module.exports=adminLoginService;