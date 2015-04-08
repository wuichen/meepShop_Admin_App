var koa = require('koa');
var serve = require('koa-static');
var app = koa();

app.use(serve('../www/'))

app.listen(8080);

console.log('server listen port 8080');
