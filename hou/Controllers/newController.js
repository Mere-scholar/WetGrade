//热品
exports.newProduct=(req,res)=>{
    if(req.session.sign){
        state=2;
        var user =req.session.user;
        res.render('newProduct',{user:user});
    }else{
        res.render('admin',{});
    }
};
exports.newAction=(req,res)=>{
    //控制器把参数传递给业务层，业务层处理之后通过回调机制处理结果
    //1.引入模块
    var newService=require('../Service/newService');
    //2创建对象
    var newservice=new newService();
    //3处理业务逻辑
    newservice.getProduct({
    },function (result) {
        res.json(result);
    })
};
