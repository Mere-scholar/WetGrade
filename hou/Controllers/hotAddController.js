exports.hotaddProduct=(req,res)=>{
    if(req.session.sign){
        state=2;
        var user =req.session.user;
        res.render('hotaddProduct',{user:user});
    }else{
        res.render('admin',{})
    }
};
//添加数据功能
exports.hotaddAction=(req,res)=>{
    var id=req.body.id;
    var name = req.body.name;
    var textarea = req.body.textarea;
    var key = req.body.key;
    var image_url = req.body.image_url;
    var price=req.body.price
    //控制器把参数传递给业务层，业务层处理之后通过回调机制处理结果
    //1.引入模块
    var hotService=require('../Service/hotService');
    //2创建对象
    var hotservice=new hotService();
    //3处理业务逻辑
    hotservice.addProduct({
        id:id,
        name:name,
        textarea:textarea,
        key:key,
        image_url:image_url,
        price:price
    },function (result) {
        res.json(result);
    });
};

//单删功能
exports.swiperdeleAction=(req,res)=>{
    //控制器把参数传递给业务层，业务层处理之后通过回调机制处理结果
    //1.引入模块
    var id=req.body.id;
    var hotService=require('../Service/hotService');
    //2创建对象
    var hotservice=new hotService();
    //3处理业务逻辑
    hotservice.deleteProduct({
        productId:id,
    },function (result) {
        res.json(result);
    })
};

//删除表中所有的数据
exports.swiperdeleAllAction=(req,res)=>{
    //控制器把参数传递给业务层，业务层处理之后通过回调机制处理结果
    //1.引入模块
    var hotService=require('../Service/hotService');
    //2创建对象
    var hotservice=new hotService();
    //3处理业务逻辑
    hotservice.deleteAllProduct({
    },function (result) {
        res.json(result);
    })
};
