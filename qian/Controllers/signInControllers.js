exports.signup = (req,res)=>{

    res.render('signup',{});
};
exports.signInAction  =(req,res)=>{
      var  name =req.body.name;
      var  password = req.body.password;
    // console.log(name,password);
    //(2)控制器把参数传递给业务层，业务层处理后通过回调机制传回处理结果
    //1,引入模块
    var ProductService = require('../Service/ProductService');
    //2,创建对象
    var productService = new ProductService();

    //3, 处理业务逻辑
    productService.login({
        name: name,
        password:password,
    },function (result) {
        // console.log(result);
        res.end(JSON.stringify(result));
    });
}