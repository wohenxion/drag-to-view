import axios from "axios";
// let loadingInstance; //创建Loading 的实例
let server = axios.create({
  baseURL: process.env.VUE_APP_BASEURL, // 配置axios请求的地址
  crossDomain: true,
  timeout: 3000,
  withCredentials: true //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  // axios.defaults.headers.common["Authorization"] = ""; // 设置请求头为 Authorization
});
// 请求拦截
server.interceptors.request.use(
  config => {
    // 1. 这个位置就请求前最后的配置
    // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
server.interceptors.response.use(
  response => {
    // 请求成功
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据
    return response;
  },
  error => {
    // 请求失败
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          // 对400错误您的处理\
          break;
        case 401:
          // 对 401 错误进行处理
          break;
        default:
          // 如果以上都不是的处理
          return Promise.reject(error);
      }
    }
  }
);
export default server;
