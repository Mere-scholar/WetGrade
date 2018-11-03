exports.adminRegister = (req , res)=>{
    res.render('adminRegister',{});
};
exports.register=function (req,res) {
    //1,解析客户端提交的数据
    var name  = req.body.name;
    var password  = req.body.password;

    //2,向业务层要数据
    //(1),引入UserService模块
    var adminRegisterService = require('../Service/adminRegisterService');
    //(2),创建UserService对象
    var adminRegisterService = new adminRegisterService();
    //(3),插入用户
    adminRegisterService.insert(name,password,function(result){
        //3,把数据传给view
        res.json(result);
    });
};
