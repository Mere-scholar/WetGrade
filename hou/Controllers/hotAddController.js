exports.hotaddProduct=(req,res)=>{
    res.render('hotaddProduct',{})
};
//添加数据功能
exports.hotaddAction=(req,res)=>{
    var id=req.body.id;
    var name = req.body.name;
    var textarea = req.body.textarea;
    var key = req.body.key;
    var image_url = req.body.image_url;
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
        image_url:image_url
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
