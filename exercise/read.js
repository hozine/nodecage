var fs=require('fs');

//异步读取文本文件
function read(){
    fs.readFile('../app.js','utf-8',function(err,data){
        if(err){
            console.log(err);
    }else{
        console.log(data);
    }
    });
}
//异步读取二进制文件
function readBuffer(){
    fs.readFile('app.js',function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(`${data}\n`)
            var string=data.toString('utf-8');  //Buffer 转换为String
            console.log(string+'\n'+data.length+' bytes.');
        }
    });
}
//写文件
function write(){
    var data='Hello world!\nThis is a first information from another world.';
    fs.writeFile('output.txt',data,function (err){
        if(err){
            console.log(err);
        }else{
            console.log('The file is writed!');
        }
    });
    //console.log(data);
}
//读取文件状态
function status(){
    fs.appendFile('output.txt','\nthis is another line.',function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Success append file.');
        }
    });
    fs.stat('output.txt',function(err,stat){
        if(err){
            console.log(err);
        }else{
            //is file?
            console.log('isFile: '+stat.isFile());
            //is directory?
            console.log('isDirectory:'+stat.isDirectory()+ '');
            if(stat.isFile()){
                //size of file
                console.log('size: '+stat.size+'bytes');
                //create time
                console.log('birth time: '+stat.birthtime);
                console.log('modify time: '+stat.mtime);
            }
        }
    });
}
/*上面这段程序运行结果会是先输出stat信息，再输出success append信息。
因为两个函数都是异步的，appendFile函数执行后会继续运行下面的程序，打开文件等操作再后台运行。
而stat函数运行更快，结果会先输出，然后append结果输出。
这就是异步执行实际执行时，代码顺序不定，输出结果混乱，需要注意。
 */

//输入流和输出流、管道
var rs=fs.createReadStream('output.txt');
function readrs(){
    rs.on('data',function(chunk){
        console.log(`DATA1:\n${chunk}\n`);
    });

    rs.on('end',function(){
        console.log('END');
    });
    rs.on('data',function(chunk){
        console.log(`DATA2:\n${chunk}\n`)
    })
    rs.on('error',function(err){
        console.log('ERROR:'+err);
    });
}
//a new readstream and writestream
function aaa(){
    var rs=fs.createReadStream('output.txt','utf8');
    rs.on('data',function(chrunk){console.log('onData');console.log(chrunk);});
    rs.on('end',function(){console.log('End00')});
    rs.on('error',function(err){console.log(err);});
    var ws1=fs.createWriteStream('output1.txt','utf8');
    ws1.write('使用stream写入文本数据...\n');
    ws1.write('END');
    ws1.end();
    var ws2=fs.createWriteStream('output2.txt','utf8');
    ws2.write(new Buffer('使用Stream写入二进制数据...\n','utf8'));
    ws2.write(new Buffer('End.,,','utf8'));
    var rs2=fs.createReadStream('output2.txt','utf8');
    rs2.on('data',function(chrunk){console.log('onDataoutput2',chrunk.toString('utf8'));});
}

module.exports=readrs;