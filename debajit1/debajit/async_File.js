/*const fs = require('fs');

var read = fs.readFileSync('demo.txt','utf8');
console.log(read);

fs.writeFileSync('new_file.txt',read);

var read1 = fs.readFileSync('new_file.txt','utf8');
console.log(read1);
*/

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

//fs.mkdirSync('debajit');

console.log(__dirname);
console.log(__filename);

