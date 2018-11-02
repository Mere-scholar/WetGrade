function SwiperService() {
    this.getProduct=function (data,call) {
        var SwiperModule=require('../Modules/SwiperModule');
        //创建对象
      var swiperModule=new SwiperModule();
        swiperModule.init();
        //数据操作
        swiperModule.selectProduct(data,function (result) {
            var body={
                insertid:-1
            }
            if (result!=null){
                body.insertid=result.insertid;
            }
            call(body);
        })
    }
}

module.exports=SwiperService;