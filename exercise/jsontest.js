const fs=require('fs');

function jsontest(){
    fs.readFile('../hello-koa/package.json',function(err,data){
        if(err){
            console.log(JSON.stringify(err));
        }else {
                var file=data.toString('utf8');
                var f=JSON.parse(file);
                for(let i of data){
                    console.log(i+':'+data[i]);
                }
                //console.log(JSON.parse(file));
                //console.log('data is: \n'+data);
                console.log(`data's lenth: ${data.length}`);
        }   
    });
}

module.exports=jsontest;