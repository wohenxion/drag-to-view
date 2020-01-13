import http from "../http.js";
export default {
  PageList: () => {
    return http.get("/page/pageList");
  }
};
