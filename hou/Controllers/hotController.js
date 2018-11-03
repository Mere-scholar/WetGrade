//热品
exports.hotProduct=(req,res)=>{
    if(req.session.sign){
        state=2;
        var user =req.session.user;
        res.render('hotProduct',{user:user});
    }else{
        res.render('admin',{})
    }
};
exports.hotAction=(req,res)=>{
    //控制器把参数传递给业务层，业务层处理之后通过回调机制处理结果
    //1.引入模块
    var hotService=require('../Service/hotService');
    //2创建对象
    var hotservice=new hotService();
    //3处理业务逻辑
    hotservice.getProduct({
    },function (result) {
        res.json(result);
    })
};
