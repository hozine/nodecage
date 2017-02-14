const fs = require('fs'),
      router = require('koa-router')();
function controller(dir) {

    let files = fs.readdirSync(__dirname + '/controllers'),     //读取目录下文件列表
        js_files = files.filter(f => f.endsWith('.js')),
        controllersdir = dir || 'controllers';        //箭头函数的写法

    for (let f of js_files) {                                 //将每一个js文件导入，并注册router
        console.log(`开始处理控制器： ${f}...`);
        let mapping = require(__dirname + '/' + controllersdir + '/' + f);    //引入当前js文件
        for (let url in mapping) {                            //对引入的mapping做循环，将函数注册到router
            if (url.startsWith('GET')) {
                router.get(url.substring(4), mapping[url]);
                console.log(`register URL mapping: ${url}`);
            } else if (url.startsWith('POST')) {
                router.post(url.substring(5), mapping[url]);
                console.log(`register URL mapping: ${url}`);
            } else {
                console.log('invalid URL: ${url}');
            }
        }
    }

    return router.routes();
}

module.exports = controller;