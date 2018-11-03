function SwiperService() {
    this.getProduct=function (data,call) {
        var SwiperModule=require('../Modules/SwiperModule');
        //创建对象
        var swiperModule=new SwiperModule();
        swiperModule.init();
        //数据操作
        swiperModule.selectProduct(data,function (result) {
            call(result);
        })
    };
    //添加数据
    this.addProduct=function (data,call) {
        var SwiperModule = require('../Modules/SwiperModule');
        //创建对象
        var swiperModule = new SwiperModule();
        //连接数据库
        swiperModule.init();
        //数据操作
        swiperModule.insertProduct(data, function (result) {
            call(result);
        })
    }
       //删除单个数据
        this.deleteProduct=function (data,call) {
            var SwiperModule=require('../Modules/SwiperModule');
            //创建对象
            var swiperModule=new SwiperModule();
            //连接数据库
            swiperModule.init();
            //数据操作
            swiperModule.deleteProduct(data,function (result) {
                call(result);
            })
        }

    //删除表中数据
    this.deleteAllProduct=function (data,call) {
        var SwiperModule=require('../Modules/SwiperModule');
        //创建对象
        var swiperModule=new SwiperModule();
        //连接数据库
        swiperModule.init();
        //数据操作
        swiperModule.deleteAllProduct(data,function (result) {
            call(result);
        })
    }
}

module.exports=SwiperService;