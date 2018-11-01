//1,引入express
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var session = require('express-session');
app.use(session({
    resave:false,//添加这行
    saveUninitialized: true,//添加这行
    secret: '12345',
    name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80*1000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
}));
var multer = require('multer');
var fs = require("fs");
//2,设置模板引擎
var path = require('path');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
//5,静态文件
app.use(express.static('public'));
app.use(express.static('views'));
//6,引入body-parser模块
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.urlencoded({extended: true}));

//后台登陆页面
var loginControllers = require('./Controllers/loginControllers');
app.get('/admin',loginControllers.admin);
//后台管理首页
var indexControllers = require('./Controllers/indexControllers');
app.get('/index',indexControllers.index);

var addProductController=require('./Controllers/addProductController');
//产品添加页面路由
app.get('/addProduct',addProductController.addProduct);
//提交产品
app.post('/addProductAction',urlencodedParser,addProductController.addProductAction);
app.post("/upload",multer({dest: __dirname + '/public/upload/'}).array('file'),addProductController.upload);
//查询产品
var selectProductController = require('./Controllers/selectProductController');
app.get('/selectProduct',selectProductController.selectProduct);
app.post('/selectProductAction',urlencodedParser,selectProductController.selectProductAction);
//删除商品
var deleteProductController = require('./Controllers/deleteProductController');
app.get('/deleteProduct',deleteProductController.deleteProduct);
app.post('/deleteProduct',selectProductController.deleteProductProduct);
//修改产品信息
var updateControllers = require('./Controllers/updateControllers');
app.get('/updateProduct',updateControllers.updateProduct);
app.post('/updateProductAction',updateControllers.selectProductAction);
app.post('/addProductActionTwo',updateControllers.addProductActionTwo);



app.listen(8888);