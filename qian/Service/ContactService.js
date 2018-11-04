function ContactService() {

    this.insertService=function (data,call) {

        var ContactModule = require('../Modules/ContactModule');
        //(1) 创建对象
        var contactModule= new ContactModule();
        contactModule.init();
        //(2)数据操作
        contactModule.insertContact(data,function (result) {

            var body={
                insertId:-1
            }
            if(result!=null){
                body.insertId=result.insertId
            }
            call(body);
        })

    }

    this.selectContact=function () {

    }

}

module.exports=ContactService;