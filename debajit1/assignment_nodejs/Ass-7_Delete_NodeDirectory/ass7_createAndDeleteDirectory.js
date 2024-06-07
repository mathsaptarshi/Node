var fs = require('fs');

try{
    fs.mkdirSync('node');
    console.log('"node" directory created...');
    var createStream = fs.createWriteStream("./node/app.js");

    //To show delete operation we take some time.......using setInterval global function

    var i = 0;
    var si = setInterval(function() {
        i++; 
        console.log("wait 10sec and file and directory will remove");
        if(i>9)
        {
            clearInterval(si);
        }
    }, 1000);

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