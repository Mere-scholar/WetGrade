function ProductService() {
    //增加商品信息模块的部分，增加商品
    this.insertProduct=function (data,call) {
        var ProductModule = require('../Modules/ProductModule');
        //(1) 创建对象
        var productModule= new ProductModule();
        productModule.init();
        //(2)数据操作
        productModule.insertProduct(data,function (result) {
            var body={
                insertId:-1
            }
            if(result!=null){
                body.insertId=result.insertId;
            }
            call(body);
        });
    };
    //查询模块的信息，进行检索商品
    this.selectProduct=function (data,call) {
        var ProductModule = require('../Modules/ProductModule');
        //(1) 创建对象
        var productModule= new ProductModule();
        //初始化
        productModule.init();
        //数据操作
        productModule.selectProduct(data,function (result) {
            var body={
                insertId:-1
            }
            if(result!="") {
                body = result;
            }
            call(body);
        })
    };
    //修改产品信息时进行的查询操作
    this.selectProduct2=function (data,call) {
        var ProductModule = require('../Modules/ProductModule');
        //(1) 创建对象
        var productModule= new ProductModule();
        //初始化
        productModule.init();
        //数据操作
        productModule.selectProduct2(data,function (result) {
            var body={
                insertId:"-1"
            }
            if(result!="") {
                body = result;
            }
            call(body);
        });
    };
    //删除产品
    this.deleteProduct = function (data,call) {
        var ProductModule = require('../Modules/ProductModule');
        //(1) 创建对象
        var productModule= new ProductModule();
        //初始化
        productModule.init();
        //数据操作
        productModule.deleteProduct(data,function (result) {
            var body={
                insertId:-1
            }
            if(result!="") {
                body = result;
            }
            // console.log(body);
            call(body);
        })
    };
    //修改产品的路径
    this.insertProduct2=function (data,call) {
        var ProductModule = require('../Modules/ProductModule');
        //(1) 创建对象
        var productModule= new ProductModule();
        productModule.init();
        //(2)数据操作
        productModule.insertProduct2(data,function (result) {
            var body={
                insertId:-1
            }
            if(result!=null){
                body.insertId=result.insertId;
            }
            call(body);
        });
    };
}

module.exports=ProductService;