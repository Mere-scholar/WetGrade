var formidable = require('formidable');
var fs = require("fs");
// 引入模块
var COS = require('cos-nodejs-sdk-v5');
var cos = new COS({
    // 必选参数
    SecretId: "AKIDPWcXHuTfmlZGn9eakqnZCev23tYE95Hq",
    SecretKey: "b8iN5q8WzqkXAUs7cfcXJBrefZIev8Iz",
});

var bucketPath="hd-1257709298";
var regionPath="ap-beijing";


exports.putImage=function (filepath,fileKey,call) {
    // 调用方法
    cos.putObject({
        Bucket: bucketPath, /* 必须 */ // Bucket 格式：test-1250000000
        Region: regionPath,
        Key: fileKey, /* 必须 */
        TaskReady: function (tid) {
        },
        onProgress: function (progressData) {

        },
        // 格式1. 传入文件内容
        // Body: fs.readFileSync(filepath),
        // 格式2. 传入文件流，必须需要传文件大小
        Body: fs.createReadStream(filepath),
        ContentLength: fs.statSync(filepath).size
    }, function (err, data) {
        call(data);
    });
}
exports.getImageUrl=function (fileKey) {
    var url = cos.getObjectUrl({
        Bucket: bucketPath, // Bucket 格式：test-1250000000
        Region: regionPath,
        Key: fileKey,
        Expires: 600000,
        Sign: true,
    }, function (err, data) {
    });
    return url;
}