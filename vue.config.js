const path = require("path");
module.exports = {
  pages: {
    index: {
      entry: "client/main.js"
    }
  },
  productionSourceMap: process.env.NODE_ENV !== "production",
  devServer: {
    port: 9000
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve("client"));
    config.resolve.alias.set("@common", path.resolve("common"));
    config.module
      .rule("js")
      .include.add(/engine-template/)
      .end()
      .include.add(/client/)
      .end()
      .include.add(/common/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  }
};
