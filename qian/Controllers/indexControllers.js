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