/*const fs = require('fs');

var read = fs.readFileSync('demo.txt','utf8');
console.log(read);

fs.writeFileSync('new_file.txt',read);

var read1 = fs.readFileSync('new_file.txt','utf8');
console.log(read1);
*/

const fs = require('fs');

function fileasync(err,data){
    if(err)
    {
        console.log('error is:' , err);
        return;
    }

    console.log(data.toString());
}

var read = fs.readFile('demo.txt',fileasync);
console.log(read,);


