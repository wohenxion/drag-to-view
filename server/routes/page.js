const router = require("koa-router")();
const Page = require("../models/page");
router.get("/pageList", async ctx => {
  ctx.body = await Page.find({ author: ctx.state.userID });
});

router.get("/pageDetail", async ctx => {
  ctx.body = await Page.findOne({ pid: ctx.request.query.pid });
});

router.post("/save", async ctx => {
  let pid = ctx.request.body.pid;
  let data = ctx.request.body.data;
  ctx.body = await Page.updateOne({ pid }, { $set: data });
});
module.exports = router;
