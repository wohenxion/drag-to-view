// const mongoose = require("mongoose");
const router = require("koa-router")();
const User = require("../models/home");
// const fs = require("fs");

router.get("/", async ctx => {
  let tesObj = await User.find();
  await ctx.render("home", {
    tesObj
  });
});

// router.get("/:id", async ctx => {
//   let _id = ctx.params.id;
//   let tesObj = await User.findById({ _id });
//   ctx.body = tesObj;
// });

router.post("/:id", async ctx => {
  // let _id = ctx.params.id;
  let data = ctx.request.body;
  let tesObj = await User.update(
    { userName: "12243" },
    { $set: { ...data } },
    { upsert: true }
  );
  // let tesObj = await User.create({ ...data });
  console.log(tesObj);
  ctx.body = tesObj;
});

module.exports = router;
