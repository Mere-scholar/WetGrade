exports.admin = (req , res)=>{
    var state = -1;
    if(req.session.sign)
        state=2;
    res.render('admin',{state:state});
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
        // console.log(result.username);   //管理员输入的管理员账号
        // console.log(result);
        if(result.state==2){
            req.session.sign=true;
            req.session.user={
                name:result.username,
                id:result.id
            };
            // console.log(req.session);
        }
        res.json(result);
    });
};