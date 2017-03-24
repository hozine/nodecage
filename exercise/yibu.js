module.exports=yibu2;
function yibu1(){
    console.log('programm 1 is run...');
    setTimeout(function(){
        console.log('After 2s, programm 2 is run...');
    },2000);
    console.log('programm 3 is run...');
}

function yibu(){
    getNumber().then(function(data){
        console.log('resolved: '+data);
    },function(reson,data){
        console.log('reject: '+reson);
    });
}
function getNumber(){
    let p=new Promise(function(resolve,reject){
        setTimeout(function(){
            let num=Math.ceil(Math.random()*10);
            if(num<=5){
                //resolve(num);
                reject('number is too small...')
            }else{
                //reject('number is too big.');
                resolve(num);
            }
        },2000);
    });
    return p;
}

//试试Promise的all和race方法
function timeOut1(){
    var p=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('timeOut1 is running...');
            resolve('timeOut1 over!');
        },2000);
    });
    return p;
}
function timeOut2(){
    var p=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('timeOut2 is running');
            reject('timeOut2 over!');
        },6000);
    });
    return p;
}
function timeOut3(){
    var p=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('timeOut3 is running');
            resolve('timeOut3 over!');
        },5000);
    });
    return p;
}
function yibu2(){
    Promise.all([timeOut1(),timeOut2(),timeOut3()])
        .then(function(data){
            console.log(data);
    }).catch(function(reson){
        console.log(reson);
    });
}

setTimeout(JSON.string)