var fs=require('fs');

var f_read=fs.readFile('test1.txt','utf8',function(err,data){                                                           
        if(err)
            console.error(err);
        else
        {
            console.log(f_read);
            fs.writeFile('text2.txt',data,function(err,data){
                                            if(err)
                                                console.error(err);
                                            else
                                                console.log('Success!!!');
            
                                                            });

        }
 });