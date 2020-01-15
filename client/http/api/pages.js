import axios from "../axios.js";
export default {
  PageList: () => {
    return axios({
      url: "/page/pageList",
      method: "get",
      mock: true
    });
  },
  PageDetail: params => {
    return axios({
      url: "/page/pageDetail",
      method: "get",
      params
    });
  },
  /**
   * 页面保存
   */
  SavePage: data => {
    return axios({
      url: "/page/save",
      method: "put",
      data
    });
  },
  /**
   * 页面添加
   */
  CreatPage: data => {
    return axios({
      url: "/page/add",
      method: "post",
      data
    });
  },
  /**
   * 页面添加
   */
  DeletetPage: pid => {
    return axios({
      url: "/page/delete/" + pid,
      method: "delete"
    });
  }
};
