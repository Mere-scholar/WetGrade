function LoginService(){
    //对象初始化
    this.init=function(){
        //(1)引入loginModule模块
        var LoginModule =  require('../Modules/LoginModule');
        //(2)获得对象
        this.loginModule = new LoginModule();
        //(3)对象初始化
        this.loginModule.init();
    }
    this.checkUser=function(name,password,call){
        //(1)用户工具类
        let tool=require('../MD5/tool');
        var password =tool.crypto(password);
        // console.log(password);
        this.selectUserByName(name,function(result){
            let body={
                state:0,
                msg:"hello"
            };
            //1,获得数组的长度
            let length = result.length;
            if(length==0){
                body.msg="没有当前用户账号，请确认账号是否正确，如果没有账号，请注册新用户！"
            }else{
                //2,把密码从数组对象里面取出来
                let buffer = result[0].userPassword;
                // console.log(buffer);
                //3,判断用户是否合法
                if(password==buffer){
                    body.state=2,
                        body.msg="登录成功！";
                }else{
                    body.state=1,
                        body.msg="登录失败，密码错误，请重新输入密码！";
                }
            }
            call(body);
        });
    }
    this.selectUserByName=function(name,call){
        //(4)查询密码
        this.loginModule.selectUserByName(name,function(result){
            call(result);
        });
    }
}
module.exports=LoginService;