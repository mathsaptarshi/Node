
const fs = require('fs');
var read = fs.readFile('demo.txt','utf8',function(err,data){
    if(err)
    {
        console.error('error is:' , err);
        return;
    }else{
        console.log(data);
             fs.writeFile('new_demo.txt',read,function(err,data){
                if(err)
                {
                    console.error(err);
                }else{
                    console.log('successfuly read the file...');
                    
                }
        });
    }
    
    
});



