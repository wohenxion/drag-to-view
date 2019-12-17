const Koa = require("koa");
const render = require("koa-ejs");
const path = require("path");
const statics = require("koa-static");
const fs = require("fs");

const app = new Koa();

// 静态资源目录对于相对入口文件index.js的路径
const publicPath = "./public";

app.use(statics(path.join(__dirname, publicPath)));

render(app, {
  root: path.join(__dirname, "view"),
  layout: false,
  viewExt: "html",
  cache: false,
  debug: false
});
app.use(function(ctx, next) {
  ctx.state = ctx.state || {};
  ctx.state.now = new Date();
  ctx.state.ip = ctx.ip;
  ctx.state.version = "2.0.0";
  return next();
});

const getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "/test.json"), (err, data) => {
      if (err) {
        reject(err);
        return console.error(err);
      }
      resolve(JSON.parse(data.toString()));
    });
  });
};

app.use(async ctx => {
  let pageData;
  pageData = await getData();
  await ctx.render("index", {
    pageData
  });
});

app.listen(3001);
console.log("[demo] start-quick is starting at port 3001");
