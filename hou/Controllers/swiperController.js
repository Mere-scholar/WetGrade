exports.swiper=(req,res)=>{
    if(req.session.sign){
        state=2;
        var user =req.session.user;
        res.render('swiper',{user:user});
    }else{
        res.render('admin',{});
    }
};
exports.swiperAction=(req,res)=>{
    //控制器把参数传递给业务层，业务层处理之后通过回调机制处理结果
    //1.引入模块
    var SwiperService=require('../Service/SwiperService');
    //2创建对象
    var swipersservice=new SwiperService();
    //3处理业务逻辑
    swipersservice.getProduct({
    },function (result) {
        res.json(result);
    })
};
