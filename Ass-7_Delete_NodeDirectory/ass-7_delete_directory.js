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



//file delete....................

fs.unlink('./node/app.js', function (err) {
    if (err)
    {
        console.log(err);
    }   
    console.log('File deleted!');
});

fs.rmdirSync('./node');