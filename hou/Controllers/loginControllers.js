exports.admin = (req , res)=>{
    res.render('admin',{});
};

exports.adminLogin = (req , res)=>{
    var adminName = req.body.adminName;
    var adminPassword = req.body.adminPassword;
    //2,验证用户是否合法
    //(1)引入userService
    let AdminService = require('../Service/AdminService');
    //(2)创建对象
    let adminService = new AdminService();
    //(3)对象初始化
    adminService.init();
    //(4)验证用户是否合法
    adminService.checkUser(adminName,adminPassword,function(result){
        res.json(result);
    });
};