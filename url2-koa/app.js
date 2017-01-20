const Koa=require('koa');
const app=new Koa();

//  const app= new require('koa')();    //这种写法会出现错误
const router=require('koa-router')();
const bodyParser=require('koa-bodyparser'); //增加body解析功能

app.use(async (ctx,next)=>{
    console.log(`Proccess ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

router.get('/',async (ctx,next)=>{
    ctx.response.body=`<h1>Index</h1>
        <form action="/singin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
            </form>`;
});

router.get('/hello/:name',async (ctx,next)=>{
    ctx.response.body=`<h1>Hello, ${ctx.params.name}!</h1>`;
});

router.post('/singin',async (ctx,next)=>{
    var name=ctx.request.body.name || '',
        password=ctx.request.body.password || '';
    console.log(`sinhin with name: ${name}, password: ${password}`);
    if(name==='koa'&&password==="123"){
        ctx.response.body=`<h1>Welcome, ${name}!</h1>`;
    }else{
        ctx.response.body=`<h1>Login failed!</h1>
            <p><a href="/">Try again</a></p>`;
    }
});

app.use(bodyParser());
app.use(router.routes());

app.listen(3000);
console.log('koa started at port 3000...')                      //00 