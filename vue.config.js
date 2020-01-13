const path = require("path");
// 后端请求地址 注意[他会根据你环境的不同从而获取的 env 文件不同]
const target = process.env.VUE_APP_APIURL;
const api = process.env.VUE_APP_BASEURL;
module.exports = {
  pages: {
    index: {
      entry: "client/main.js"
    }
  },
  productionSourceMap: process.env.NODE_ENV !== "production",
  devServer: {
    // 所有的接口请求代理
    proxy: {
      [api]: {
        target: target,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          ["^" + api]: ""
        }
      }
    },
    port: 9001
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve("client"));
    config.resolve.alias.set("@common", path.resolve("common"));
    config.module
      .rule("js")
      .include.add(/page-template/)
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
