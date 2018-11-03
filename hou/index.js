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
    cookie: {maxAge: 60*60*1000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
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
//后台管理员登陆时进行的验证
app.post('/adminLogin',loginControllers.adminLogin);
//后台管理首页
var indexControllers = require('./Controllers/indexControllers');
app.get('/index',indexControllers.index);
//后台管理员注册页面
var registerControllers = require('./Controllers/registerControllers');
app.get('/adminRegister',registerControllers.adminRegister);
app.post('/registerAction',urlencodedParser,registerControllers.register);

//产品管理模块
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
app.get('/updateProduct',updateControllers.updateProduct);  //跳转到修改产品信息页面
app.post('/updateProductAction',updateControllers.selectProductAction); //修改信息之前先进性搜索将要修改的产品检索出来
app.post('/addProductActionTwo',updateControllers.addProductActionTwo); //对要修改的产品进行修改
//管理首页轮播图效果
var swiperController=require('./Controllers/swiperController');
app.get('/swiper',swiperController.swiper);
app.post('/swiperAction',swiperController.swiperAction);
//首页轮播图添加
var swiperaddController=require('./Controllers/swiperaddController');
app.get('/swiperadd',swiperaddController.swiperadd);
app.post('/swiperaddAction',swiperaddController.swiperaddAction);
//单删除功能
app.post('/swiperdeleAction',swiperaddController.swiperdeleAction);
//一键删除表中所有的数据
app.post('/swiperdeleAllAction',swiperaddController.swiperdeleAllAction);


//热销产品管理
var hotController=require('./Controllers/hotController');
app.get('/hotProduct',hotController.hotProduct);
app.post('/hotAction',hotController.hotAction);
//热销产品添加
var hotaddController=require('./Controllers/hotAddController');
app.get('/hotaddProduct',hotaddController.hotaddProduct);
app.post('/hotaddAction',hotaddController.hotaddAction);
//单热销产品删除功能
app.post('/hotdeleAction',hotaddController.swiperdeleAction);
//一键删除表中热销产品所有的数据
app.post('/hotdeleAllAction',hotaddController.swiperdeleAllAction);

//新品产品管理
var newController=require('./Controllers/newController');
app.get('/newProduct',newController.newProduct);
app.post('/newAction',newController.newAction);
//新品产品添加
var newAddController=require('./Controllers/newAddController');
app.get('/newaddProduct',newAddController.newaddProduct);
app.post('/newaddAction',newAddController.newaddAction);
//单新品产品删除功能
app.post('/newdeleAction',newAddController.swiperdeleAction);
//一键删除表中新品产品所有的数据
app.post('/newdeleAllAction',newAddController.swiperdeleAllAction);


app.listen(8888);

//张明星是小狗

