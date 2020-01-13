const router = require("koa-router")();
const Page = require("../models/page");
router.get("/pageList", async ctx => {
  let tesObj = await Page.find({ author: ctx.state.userID });
  ctx.body = tesObj;
});
module.exports = router;
