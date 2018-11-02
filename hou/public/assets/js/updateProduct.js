function selectProduct() {
    var productType=document.getElementById('productType');
    // var notFound = document.getElementById('notFound');
    $.ajax({
        url: 'updateProductAction',
        type: "POST",
        data: {
            productType:productType.value
        },
        traditional: true,//这里设置为true
        success: function(data) {
            // alert(data.id);
			console.log(data);
            if(data.insertId == "-1"){
                alert("请输入正确的商品编码");
			}
            var productNum=document.getElementById('productNum');
            productNum.innerHTML = data[0].id;
            var productName=document.getElementById('productName');
            productName.value = data[0].name;
            var productPrice=document.getElementById('productPrice');
            productPrice.value = data[0].productPrice;
            // console.log(image_url);
            var colorSelect = document.getElementById('colorSelect');
            colorSelect.value = data[0].colorSelect_id;
            var sizeSelect = document.getElementById('sizeSelect');
            sizeSelect.value = data[0].sizeSelect_id;
            var textarea =document.getElementById('textarea');
            textarea.value	= data[0].textarea;
            var tupian = document.querySelector('.tupian');
            tupian.innerHTML = data[0].image_url;
        }
    });
};
// 初始化Web Uploader
var uploader = WebUploader.create({
    // 选完文件后，是否自动上传。
    auto: true,
    // swf文件路径
    swf: 'https://cdn.staticfile.org/webuploader/0.1.1/Uploader.swf',
    // 文件接收服务端。
    server: 'upload',
    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#filePicker',
    // 只允许选择图片文件。
    accept: {
        title: 'Images',
        extensions: 'gif,jpg,jpeg,bmp,png',
        mimeTypes: 'image/*'
    }
});
// 文件上传成功，给item添加成功class, 用样式标记上传成功。
uploader.on( 'uploadSuccess', function( file ,response) {
    // console.log(response.key);
    //获得服务器的图片
    var imgBox  =document.getElementById('imgBox');
    var url = response.url;
    var img = document.createElement('img');
    img.src=url;
    img.style.width="200px";
    img.style.height="200px";
    img.style.margin = "5px";
    var input = document.getElementById('key');
    input.innerHTML=response.key;
    imgBox.appendChild(img);
});
// 文件上传失败，显示上传出错。
uploader.on( 'uploadError', function( file ) {

});

function addProduct() {
    var name=document.getElementById('productName');
    var num=document.getElementById('productNum');
    var productPrice=document.getElementById('productPrice');
    var image_url=document.getElementById('imgBox');
    var sizeSelect = document.getElementById('sizeSelect');
    var colorSelect = document.getElementById('colorSelect');
    var textarea =document.getElementById('textarea');
    var key = document.getElementById('key');
    $.ajax({
        url: 'addProductActionTwo',
        type: "POST",
        data: {
            name: name.value,
            sizeSelect: sizeSelect.value,
            colorSelect:colorSelect.value,
            textarea:textarea.value,
            key:key.innerHTML,
            productPrice:productPrice.value,
            image_url:image_url.innerHTML,
            num:num.innerHTML
        },
        traditional: true,//这里设置为true
        success: function(data) {
            if (data.insertId == 0){
                alert("修改数据成功!");
			}
        }
    });
}
//删除照片
var delImage = document.getElementById("delImage");
delImage.onclick = function () {
    document.getElementById("imgBox").firstChild.remove();
}