//测试var与let的作用域的不同
function test(){
    fun1();
    console.log('访问arg1：'+arg1);
    console.log('访问arg2：'+arg2);
}

function fun1(){
    var arg1=1.1;
    let arg2=2.2;
    console.log('函数fun1的参数arg1='+arg1);
    console.log('函数fun1的参数arg2='+arg2);
}

function test2(){   //此函数无论数组index为多少，输出都为10；
                    //因为当函数调用时，循环已结束，i固定为10；
    var a=[];
    /*for(var i=0;i<10;i++){
        a[i]=function(){
            console.log(i);
        }
    }*/
    /*for(var i=0;i<10;i++){  //正确方法：利用闭包传递当前i；
        a[i]=function(i_local){
            return function(){
                console.log(i_local);
            };
        }(i);
    }*/
    for(let i=0;i<10;i++){      //正确方法2：es6新增块级作用域定义关键字let；
        a[i]=function(){
            console.log(i);
        };
    }
    a[8]();
}

module.exports=test2;