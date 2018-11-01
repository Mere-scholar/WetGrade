function ProductService() {
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

    }
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
    }
    
}

module.exports=ProductService;