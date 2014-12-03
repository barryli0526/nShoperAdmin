/**
 * Created with JetBrains WebStorm.
 * User: bli111
 * Date: 11/24/14
 * Time: 1:19 PM
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var app = express();


app.engine('html', require('ejs').renderFile);
app.set('views','./views');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index');
})

app.get('/index', function(req, res){
    res.render('index');
})

app.get('/kehu', function(req, res){
    res.render('kehu');
})

app.get('/kehu/detail', function(req, res){
    res.render('kehuDetail');
})

app.get('/kehu/detail/edit', function(req, res){
    res.render('kehuEdit');
})

app.get('/contact', function(req, res){
    res.render('contact');
})


app.listen(3000, function(err){
    console.log('listen on port 3000...');
});