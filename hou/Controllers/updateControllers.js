exports.updateProduct=function (req,res) {
    res.render('updateProduct',{});
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
    productService.selectProduct2({
        productType:productType
    },function (result) {
        res.json(result);
    })
};

exports.addProductActionTwo=function (req,res) {
    //(1)解析参数
    // console.log(req.body);
    var name=req.body.name;
    var num=req.body.num;
    var sizeSelect =req.body.sizeSelect;
    var colorSelect = req.body.colorSelect;
    var textarea =req.body.textarea;
    var key = req.body.key;
    var productPrice=req.body.productPrice;
    var image_url = req.body.image_url;
    //(2)控制器把参数传递给业务层，业务层处理后通过回调机制传回处理结果
    //1,引入模块
    var ProductService = require('../Service/ProductService');
    //2,创建对象
    var productService = new ProductService();
    //3, 处理业务逻辑
    productService.insertProduct2({
        name:name,
        sizeSelect:sizeSelect,
        colorSelect:colorSelect,
        textarea:textarea,
        key:key,
        productPrice:productPrice,
        image_url:image_url,
        num:num
    },function (result) {
        res.json(result);
    });
}
exports.upload=function (req, res) {
    var filepath = req.files[0].path;
    //1,引入ImageService模块
    var ImageService = require('../Service/ImageService');
    //2，创建对象
    var imageService=new ImageService();
    //3,对象调方法
    imageService.getResult(filepath,function (result) {
        res.json(result);
    });

}