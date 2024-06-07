var express =require('express');

var factorial = require('./my_modules/factorial.js');
var bodyParser = require('body-parser');


var app = express();


app.set('view engine','pug');
app.set('views','./views');

/*app.get('/factorial/:num',function(req,res){
    //res.send('Hello world!!! For testing server...');
    res.send(req.params.num);
});*/

app.use(bodyParser.urlencoded({extended: true}));

app.get('/factorial/:num', function(req,res){
//    res.send(`${req.params.num}!=` + factorial(req.params.num));
//    res.render('factorial.pug',{title: 'Factorial Demo!!!', header: 'Factorial'})
    var arr=[];

    for(var i=0;i<=req.params.num;i++)
        arr[i] = factorial(i);
        res.render('factorial',{title:'Factorial Demo', header: 'Factorial_Demo',vals: arr});
        console.log(arr);
//        res.render('login.pug');
});

app.get('/login', function(req,res){
    res.render('login');
});

app.post('/process_login',function(req,res){
    console.log(req.body);
    if (req.body.uid == 'saptarshi' && req.body.pwd == 'nopass')
        res.render('home',{msg: 'Welcome Saptarshi Biswas'});
    else
        res.render('home' , {msg :'user_id and password not matched'});
    }
);

app.listen(8086);