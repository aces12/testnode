var express = require('express')
    //, routes = require('./routes')
    //, uer = require('./routes/user')
    , http = require('http')
    , path = require('path');

    
var bodyParser = require('body-parser');
var app = express();
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended:true}));

app.set('port', process.env.PORT || 3000);
//app.use(express.favicon());
app.use(function(req, res, next){
    console.log('Fist Middleware process request');
    //res.send({name:'소녀시대', age:20});

    var paramId = req.param('id');
    var paramPassword = req.param('password');

    console.log(paramId);
    console.log(paramPassword);
    res.end();
    
    //res.redirect('http://google.co.kr');
    //req.user = 'mike';
    //next();
});

app.use(function(req, res, next){
    console.log('Second Middleware process request');
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express Server ' + req.user + ' response</h1>');
})

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});