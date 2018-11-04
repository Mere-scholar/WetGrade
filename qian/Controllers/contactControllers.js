exports.contact = (req,res)=>{
    var state = -1;
    if(req.session.sign)
        state=2;
    // console.log(req.session.sign);
    res.render('contact',{state:state});
};

//联系我们
exports.contactAction=function (req,res) {

    //(1)解析参数
    var name=req.body.name;
    var email =req.body.userEmail;
    var subject = req.body.userMsg;

    //(2)控制器把参数传递给业务层，业务层处理后通过回调机制传回处理结果
    //1,引入模块
    var ContactService = require('../Service/ContactService');
    //2,创建对象
    var ContactService = new ContactService();
    //3, 处理业务逻辑
    ContactService.insertService({
        name:name,
        email:email,
        subject:subject,
    },function (result) {
        res.json(result);
    });
};