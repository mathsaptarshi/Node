var express = require('express');
var factorial = require('./my_modules/factorial');
var bodyparser = require('body-parser');
//var fact = require('./my_modules/demo');
var app = express();

app.set('view engine' , 'pug');
app.set('views' ,'./views');

app.use(bodyparser.urlencoded({extended : true}));
//app.use(bodyParser.json());


app.get('/factorial/:num',function(req,res){

    //res.send('it is working');
    //res.send(req.param.num);
    //res.send(`${req.params.num} != ` + factorial(req.params.num));
    var arr = [];

    for(var i=0;i<=req.params.num;i++)
    {
        arr[i] = factorial(i);
    }
    console.log(arr);
    //res.render('factorial_htmltable' , {title:'dynamic_title', header:'factorial_example', vals: arr});
    //res.render('factorial_htmltable.pug');

   
});


app.get('/login',function(req,res){

    res.render('login.pug');
});

app.post('/process_login',function(req,res){

    //res.render('login.pug');
    console.log(req.body);
    if(req.body.username == 'abcd@gmail.com' && req.body.password == '12345')
    {
        res.render('home' , {msg : 'Welcome to the webpage'});
    }else{
        res.render('login',{msg : 'Login credential not mathched'});
    }
});

app.listen(8085);

