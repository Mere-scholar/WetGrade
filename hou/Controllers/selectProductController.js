exports.selectProdcut=function (req,res) {
    res.render('selectProdcut',{});
};
exports.selectProductAction = function (req,res) {
    //(1)解析参数

    var productType = req.body.productType;
    // console.log(productType);

    //(2)控制器把参数传递给业务层，业务层处理后通过回调机制传回处理结果
    //1,引入模块
    var ProductService = require('../Service/ProductService');
    //2,创建对象
    var productService = new ProductService();
    //3, 处理业务逻辑
    productService.selectProduct({
        productType:productType
    },function (result) {
        res.json(result);
    })
};

