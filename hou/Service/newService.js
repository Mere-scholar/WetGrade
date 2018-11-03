function newService() {
    this.getProduct=function (data,call) {
        var newProductModules=require('../Modules/newProductModules');
        //创建对象
        var newproductModules=new newProductModules();
        newproductModules.init();
        //数据操作
        newproductModules.selectProduct(data,function (result) {
            call(result);
        })
    };
    //添加数据
    this.addProduct=function (data,call) {
        var newProductModules=require('../Modules/newProductModules');
        //创建对象
        var newproductModules=new newProductModules();
        newproductModules.init();
        //数据操作
        newproductModules.insertProduct(data, function (result) {
            call(result);
        })
    }
    //删除单个数据
    this.deleteProduct=function (data,call) {
        var newProductModules=require('../Modules/newProductModules');
        //创建对象
        var newproductModules=new newProductModules();
        newproductModules.init();
        //数据操作
        newproductModules.deleteProduct(data,function (result) {
            call(result);
        })
    }

    //删除表中数据
    this.deleteAllProduct=function (data,call) {
        var newProductModules=require('../Modules/newProductModules');
        //创建对象
        var newproductModules=new newProductModules();
        newproductModules.init();
        //数据操作
        newproductModules.deleteAllProduct(data,function (result) {
            call(result);
        })
    }
}

module.exports=newService;