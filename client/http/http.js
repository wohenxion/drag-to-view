import axios from "./axios.js";

export default {
  /**
   * get 请求
   * @param url 接口路由
   * @param auth 是否需要带登录信息
   * @returns {AxiosPromise<any>}
   */
  get(url) {
    return axios.get(url);
  },

  /**
   * post 请求
   *
   * @param url 接口路由
   * @param data 接口参数
   * @param auth 是否需要带登录信息
   * @returns {AxiosPromise<any>}
   */
  post(url, data) {
    return axios.post(url, data);
  },

  /**
   * put请求
   * @param url 接口路由
   * @param data 接口参数
   * @param auth 是否需要带登录信息
   * @returns {AxiosPromise<any>}
   */
  put(url, data) {
    return axios.put(url, data);
  },

  /**
   * 删除
   * @param url 接口路由
   * @param auth 是否需要带登录信息
   * @returns {AxiosPromise}
   */
  del(url) {
    return axios.delete(url);
  },

  /**
   * 上传文件
   * @param url 接口路由
   * @param file 接口文件
   * @param auth 是否需要带登录信息
   */
  uploader(url, file) {
    let param = new FormData();
    param.append("file", file);
    return axios.post(url, param);
  }
};
