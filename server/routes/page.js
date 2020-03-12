const router = require("koa-router")();
const Page = require("../models/page");
router.get("/pageList", async ctx => {
  ctx.body = await Page.find({ author: ctx.state.userID });
});

router.get("/pageDetail", async ctx => {
  ctx.body = await Page.findOne({ pid: ctx.request.query.pid });
});

router.put("/save", async ctx => {
  let pid = ctx.request.body.pid;
  let data = ctx.request.body.data;
  ctx.body = await Page.findOneAndUpdate(
    { pid },
    { $set: data },
    { new: true, useFindAndModify: false }
  );
});

router.get("/:id", async ctx => {
  let pageData;
  console.log(ctx.params.id, pageData);
  pageData = await Page.findOne({pid: ctx.params.id});
  await ctx.render("index", {
    pageData
  });
});

router.post("/add", async ctx => {
  let author = ctx.state.userID;
  let data = ctx.request.body;
  ctx.body = await Page.create({ ...data, author });
});

router.delete("/delete/:pid", async ctx => {
  let pid = ctx.params.pid;
  ctx.body = await Page.deleteOne({ pid });
});
module.exports = router;
