const Koa=require('koa');
const app=new Koa();

//增加3个middleware组成处理链，依次打印日志，记录处理时间，输出HTML
app.use(async (ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);    //01
    await next();                                               //02 调用下一个middleware
    console.log('app OVER!!!')                                  //13
});

app.use(async (xtx,next)=>{
    const start=new Date().getTime();                           //03
    await next();                                               //04  调用下一个middleware
    const ms=new Date().getTime()-start;                        //11
    console.log(`Time:${ms}ms`);                                //12
});

app.use(async (ctx,next)=>{
    console.log('response start!')                              //05
    await next();                                               //06    调用下一个middleware
    ctx.response.type='text/html';                              //08
    ctx.response.body='<h1>Hello, koa2!</h1>';                  //09
    console.log('response over');                               //10
});

app.use(async (ctx,next)=>{
    console.log("\tI'm in there");                              //07
});
/* await 即调用下一个middleware，根据console输出，可以得出运行顺序如上面数字表明。*/
app.listen(3000);
console.log('koa started at port 3000...')                      //00 