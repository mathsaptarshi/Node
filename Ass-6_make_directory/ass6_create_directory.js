var fs = require('fs');

try{
    fs.mkdirSync('node');
    console.log('"node" directory created...');
    var createStream = fs.createWriteStream("./node/app.js");
}catch(err){
    if(err.code == 'EEXIST')
    {
        console.log('The directory named node already exists...');
    }
    else
    {
        console.log(err);
    }
}