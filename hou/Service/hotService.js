function hotService() {
    this.getProduct=function (data,call) {
        var hotProductModule=require('../Modules/hotProductModule');
        //创建对象
        var hotproductModule=new hotProductModule();
        hotproductModule.init();
        //数据操作
        hotproductModule.selectProduct(data,function (result) {
            call(result);
        })
    };
    //添加数据
    this.addProduct=function (data,call) {
        var hotProductModule=require('../Modules/hotProductModule');
        //创建对象
        var hotproductModule=new hotProductModule();
        hotproductModule.init();
        //数据操作
        hotproductModule.insertProduct(data, function (result) {
            call(result);
        })
    }
    //删除单个数据
    this.deleteProduct=function (data,call) {
        var hotProductModule=require('../Modules/hotProductModule');
        //创建对象
        var hotproductModule=new hotProductModule();
        hotproductModule.init();
        //数据操作
        hotproductModule.deleteProduct(data,function (result) {
            call(result);
        })
    }

    //删除表中数据
    this.deleteAllProduct=function (data,call) {
        var hotProductModule=require('../Modules/hotProductModule');
        //创建对象
        var hotproductModule=new hotProductModule();
        hotproductModule.init();
        //数据操作
        hotproductModule.deleteAllProduct(data,function (result) {
            call(result);
        })
    }
}

module.exports=hotService;