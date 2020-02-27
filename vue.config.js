const path = require("path");
// 后端请求地址 注意[他会根据你环境的不同从而获取的 env 文件不同]
const target = process.env.VUE_APP_APIURL;
const api = process.env.VUE_APP_BASEURL;
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin; //Webpack包文件分析器
const CompressionPlugin = require("compression-webpack-plugin"); // //Gzip
const isProduction = process.env.NODE_ENV === "production";
const cdn = {
	css: [],
	js: [
		"https://cdn.bootcss.com/vue/2.5.17/vue.runtime.min.js",
		"https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js",
		"https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js",
		"https://cdn.bootcss.com/axios/0.18.0/axios.min.js"
	]
};
module.exports = {
	pages: {
		index: {
			entry: "client/main.js",
			template: "/public/index.html",
			title: "hahaha"
		}
	},
	productionSourceMap: !isProduction,
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
		if (isProduction) {
			config
				.plugin("webpack-bundle-analyzer")
				.use(BundleAnalyzerPlugin)
			config.plugin("compression-webpack-plugin").use(
				new CompressionPlugin({
					//文件开启Gzip，也可以通过服务端(如：nginx)(https://github.com/webpack-contrib/compression-webpack-plugin)
					filename: "[path].gz[query]",
					algorithm: "gzip",
					test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
					threshold: 8192,
					minRatio: 0.8
				})
			);
		}
		// 移除 prefetch 插件
		config.plugins.delete("prefetch-index");
		// 移除 preload 插件
		config.plugins.delete("preload-index");
	},
	configureWebpack: config => {
		if (isProduction) {
			// 用cdn方式引入
			config.externals = {
				vue: 'Vue',
        axios: 'axios',
        'element-ui': 'ELEMENT',
        'vue-router': 'VueRouter',
        vuex: 'Vuex'
			};
		}
	}
};
