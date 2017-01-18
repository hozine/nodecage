const Koa=require('koa');
const app=new Koa();

//增加3个middleware组成处理链，依次打印日志，记录处理时间，输出HTML
app.use(async (ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
    console.log('app OVER!!!')
});

app.use(async (xtx,next)=>{
    const start=new Date().getTime();
    await next();
    const ms=new Date().getTime()-start;
    console.log(`Time:${ms}ms`);
});

app.use(async (ctx,next)=>{
    console.log('response start!')
    await next();
    ctx.response.type='text/html';
    ctx.response.body='<h1>Hello, koa2!</h1>';
    console.log('response over');
});

app.use(async (ctx,next)=>{
    console.log("\tI'm in there");
});

app.listen(3000);
console.log('koa started at port 3000...')