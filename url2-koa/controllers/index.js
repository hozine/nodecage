var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name:<input name="name" value="koa"></p>
            <p>Password:<input name="password" type="password"></p>
            <p><input type="submit" value="提交"></p>
        </form>`;
};

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '123') {
        ctx.response.body = `<h1>欢迎你，${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>登录失败！</h1>
            <p><a href="/">请重试！</p>`;
    }
};

module.exports = {
    "GET /": fn_index,
    "POST /signin": fn_signin
};