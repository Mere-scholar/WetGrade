//1,引入express
var express = require('express');
var app = express();
// var session = require('express-session');
// app.use(session({
//     secret: '12345',
//     name: 'express_11_cookie',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
//     cookie: {maxAge: 80*1000 },     //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
// }));
//2,设置模板引擎
var path = require('path');
//3,设置视图地址
app.set('views', path.join(__dirname, '/views'));
//4,设置ejs引擎
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);
//5,静态文件
app.use(express.static('public'));
//6,引入body-parser模块
var bodyParser = require('body-parser');
//7，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//首页
var indexControllers = require('./Controllers/indexControllers');
app.get('/index',indexControllers.index);
//登录成功记录session

//men页面
var menControllers = require('./Controllers/menControllers');
app.get('/men',menControllers.men);
//women页面
var womenControllers = require('./Controllers/womenControllers');
app.get('/women',womenControllers.women);
//collection页面
var collectionControllers = require('./Controllers/collectionControllers');
app.get('/collection',collectionControllers.collection);
//articles页面
var articlesControllers = require('./Controllers/articlesControllers');
app.get('/articles',articlesControllers.articles);
//contact页面
var contactControllers = require('./Controllers/contactControllers');
app.get('/contact',contactControllers.contact);
//privacy页面
var privacyControllers = require('./Controllers/privacyControllers');
app.get('/privacy',privacyControllers.privacy);
//signup页面
var signupControllers = require('./Controllers/signupControllers');
app.get('/signup',signupControllers.signup);
//跳转到商品详情页面
var singleControllers = require('./Controllers/singleControllers');
app.get('/single',singleControllers.single)
app.listen(8888);