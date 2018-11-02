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
    }
}
module.exports=SwiperService;