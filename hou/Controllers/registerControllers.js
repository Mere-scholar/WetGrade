exports.adminRegister = (req , res)=>{
    res.render('adminRegister',{});
};
exports.register=function (req,res) {
    //1,解析客户端提交的数据
    var name  = req.body.name;
    var password  = req.body.password;

    //2,向业务层要数据
    //(1),引入UserService模块
    var AdminLoginService = require('../Service/adminLoginService');
    //(2),创建UserService对象
    var adminLoginService = new AdminLoginService();
    //(3),插入用户
    adminLoginService.insert(name,password,function(result){
        //3,把数据传给view
        res.json(result);
    });


};
