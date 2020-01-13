const Koa = require("koa");
const render = require("koa-ejs");
const path = require("path");
const statics = require("koa-static");
const fs = require("fs");
const mongoose = require("mongoose");
const app = new Koa();
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
// 静态资源目录对于相对入口文件index.js的路径
const publicPath = "./public";

app.use(statics(path.join(__dirname, publicPath)));
// 使用ctx.body解析中间件
app.use(bodyParser());
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
  ctx.state.userID = "5dfadf3f2018fcfe2dfd3433";
  ctx.state.version = "2.0.0";
  return next();
});

// # mongodb 为协议
// # admin 连接数据库的用户
// # 123456: 该用户的密码
// # localhost: 本地的地址（因为这是本地环境）
// # 27017: mongodb的端口号(这个一般是默认值，也可以进行修改)
// # test: 数据库的名字
var db = "mongodb://admin:123456@localhost:27017/test";

// 连接
mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (!err) {
      // var schema = new mongoose.Schema({
      //   userName: String,
      //   age: Number,
      //   sex: { type: String, default: "man" }
      // });
      // var user = mongoose.model("user", schema);
      // var data = {
      //   age: 12,
      //   sex: "woman"
      // };
      // var _id = "5dfadf3f2018fcfe2dfd3434";
      // user.updateOne(
      //   { _id },
      //   {
      //     ...data
      //   },
      //   function(err, docs) {
      //     console.log(docs);
      //   }
      // );
      console.log("succese");
    }
  }
);

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

// app.use(async ctx => {
//   let pageData;
//   pageData = await getData();
//   await ctx.render("index", {
//     pageData
//   });
// });

// 配置路由
fs.readdirSync(path.join(__dirname, "./routes")).forEach(route => {
  let api = require(`./routes/${route}`);
  router.use(
    `/${route.replace(".js", "")}`,
    api.routes(),
    api.allowedMethods()
  );
});

router.get("/", async ctx => {
  let pageData;
  pageData = await getData();
  await ctx.render("index", {
    pageData
  });
});
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());
app.listen(3001);
console.log("[demo] start-quick is starting at port 3001");
