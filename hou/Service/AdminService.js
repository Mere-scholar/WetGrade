function  adminService() {
    //对象初始化
    this.init=function(){
        //(1)引入UserDao模块
        var AdminModule =  require('../Modules/AdminModule');
        //(2)获得对象
        this.adminModule = new AdminModule();
        //(3)对象初始化
        this.adminModule.init();
    };

    this.checkUser=function(adminName,adminPassword,call){

        //(1)用户工具类
        // let tool=require('../Tools/tool');
        // var name =tool.crypto(name);
        // var password =tool.crypto(password);

        this.selectUserByName(adminName,function(result){
            let body={
                state:0,
                msg:"hello"
            };
            //1,获得数组的长度
            let length = result.length;
            if(length==0){
                body.msg="没有当前用户账号！"
            }else{

                //2,把密码从数组对象里面取出来
                let buffer = result[0].adminPassword    ;
                //3,判断用户是否合法
                if(adminPassword==buffer){
                    state:2,
                    body.msg="登录成功！";
                }else{
                    state:1,
                    body.msg="登录失败，密码错误，请重新输入密码！";
                }
            }
            call(body);
        });
    };
    this.selectUserByName=function(adminName,call){
        //(4)查询密码
        this.adminModule.selectUserByName(adminName,function(result){
            call(result);
        });
    }
}
module.exports=adminService;