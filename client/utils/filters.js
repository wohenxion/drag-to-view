import moment from "moment";

const filters = {
  formatDate: val => {
    return moment(val).format("YYYY-MM-DD");
  }
};
export default filters;
