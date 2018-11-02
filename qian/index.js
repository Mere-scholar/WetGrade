//1,引入express
var express = require('express');
var app = express();
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

//首页
var indexControllers = require('./Controllers/indexControllers');
app.get('/index',indexControllers.index);
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
var signInControllers = require('./Controllers/signInControllers');
app.get('/signup',signupControllers.signup);
app.get('/signup',signInControllers.signup);
app.post('/signupAction',urlencodedParser,signupControllers.signupAction);
app.post('/signInAction',urlencodedParser,signInControllers.signInAction);
app.use(express.static('views'));
//this is //this is a this
app.listen(8888);