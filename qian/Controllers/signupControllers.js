exports.signup = (req,res)=>{
    var state = -1;
    if(req.session.sign)
        state=2;
    // console.log(req.session.sign);
    res.render('signup',{state:state});
};
exports.signupAction = (req,res)=>{

    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    // console.log(req.body);
    // 2,向业务层要数据
    var RegisterService = require('../Service/RegisterService');
    var registerService = new RegisterService();
    //(3),插入用户
    registerService.insert(name,password,email,function(result){
        //3,把数据传给view
        res.json(result);
    });
};


