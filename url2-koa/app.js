const Koa = require('koa');
const app = new Koa();                    //引入并注册koa
//  const app= new require('koa')();    //这种写法会出现错误

//const router = require('koa-router')();       //引入路由处理（router）中间件
const bodyParser = require('koa-bodyparser'); //增加body解析功能
const controller = require('./controller');

//const fs=require('fs');

app.use(async (ctx, next) => {
    console.log(`Proccess ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

//下述功能已挪至controllers文件夹下相应文件
/*
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
*/

//自动扫描controllers目录，导入js文件并注册router
//此功能提取为中间件（middleware）并放入controllers文件夹

/*var files=fs.readdirSync(__dirname+'/controllers'),     //读取目录下文件列表
    // js_files=files.filter((f)=>{
    //     return f.endsWith('.js');                       //过滤js文件
    // });
    js_files=files.filter(f=>f.endsWith('.js'));        //箭头函数的写法

for(var f of js_files){                                 //将每一个js文件导入，并注册router
    console.log(`开始处理控制器： ${f}...`);
    let mapping=require(__dirname+'/controllers/'+f);    //引入当前js文件
    for(var url in mapping){                            //对引入的mapping做循环，将函数注册到router
        if(url.startsWith('GET')){
            router.get(url.substring(4),mapping[url]);
            console.log(`register URL mapping: ${url}`);
        }else if(url.startsWith('POST')){
            router.post(url.substring(5),mapping[url]);
            console.log(`register URL mapping: ${url}`);
        }else{
            console.log('invalid URL: ${url}');
        }
    }
}*/


app.use(bodyParser());
app.use(controller());

app.listen(80);
console.log('koa started at port 80...')                      //00 