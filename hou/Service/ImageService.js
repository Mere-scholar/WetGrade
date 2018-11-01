function ImageService() {
    var name="nodejs";
    this.getKey=function () {
        var fileKey =name+new Date().getTime();
        return fileKey;
    }
    this.getResult=function (filepath,call) {
        //1,获得一个key
        var key = this.getKey();
        var qqTool = require('../TXComponents/tengXun');
        qqTool.putImage(filepath,key,function (result) {
            if(result.statusCode==200){
                //成功上传图片后。获得图片的地址
                var url= qqTool.getImageUrl(key);
                var body={
                    url:url,
                    key:key
                }
                call(body);
            }
        })
    }
}
module.exports=ImageService;