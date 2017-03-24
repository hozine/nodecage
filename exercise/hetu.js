module.exports=hetu;
function hetu(){
    var a=[]; //暂存中间结果
    var bef=[]; //存放前结果
    var res=[]; //存放计算后结果

    for(let i0=1;i0<10;i0++){
        for(let i1=1;i1<10;i1++){
            for(let i2=1;i2<10;i2++){
                for(let i3=1;i3<10;i3++){
                    for(let i4=1;i4<10;i4++){
                        for(let i5=1;i5<10;i5++){
                            for(let i6=1;i6<10;i6++){
                                for(let i7=1;i7<10;i7++){
                                    for(let i8=1;i8<10;i8++){
                                        a[0]=i0;
                                        a[1]=i1;
                                        a[2]=i2;
                                        a[3]=i3;
                                        a[4]=i4;
                                        a[5]=i5;
                                        a[6]=i6;
                                        a[7]=i7;
                                        a[8]=i8;
                                        bef.push(a);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    res=bef.filter(function (x){
        return x[0]+x[1]+x[2]===15&&x[3]+x[4]+x[5]===15&&x[6]+x[7]+x[8]===15&&x[0]+x[4]+x[8]===15&&x[2]+x[4]+x[6]===15&&x[0]+x[3]+x[6]===15&&x[1]+x[4]+x[7]===15&&x[2]+x[5]+x[8];
    });
    console.log(`There are ${res.length} set.`);
    for(let i in res){
        console.log(`this is the ${i} :
        ${res[i][0]}  ${res[i][1]}  ${res[i][2]}
        ${res[i][3]}  ${res[i][4]}  ${res[i][5]}
        ${res[i][6]}  ${res[i][7]}  ${res[i][8]}`);
    }

}