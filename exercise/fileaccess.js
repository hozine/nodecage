var fs= require('fs');
var filelists = fs.readdirSync(__dirname);
var jslists=filelists.filter((value)=>{
    return value.endsWith('.js');
});

module.exports=function(){
    console.log(`Files in ${__dirname} is: \n${jslists}`);
}