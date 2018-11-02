exports.deleteProduct=function (req,res) {
    res.render('deleteProduct',{});
};

exports.deleteProductProduct = function (req,res) {
    var productId = req.body.id;
    // console.log(productId);
    var ProductService = require('../Service/ProductService');
    //2,创建对象
    var productService = new ProductService();
    //3, 处理业务逻辑
    productService.deleteProduct({
        productId:productId
    },function (result) {
        res.json(result);
    })
};

