import axios from "axios";

export default {
  saveBar: function (apiResults) {
    return axios({
      method: "POST",
      url: "/bars/newbar",
      data: apiResults,
      headers: { "Content-Type": "application/json" },
    });
  },
  updateBar: function (updateBar, _id) {
    return axios({
      method: "PUT",
      url: "/bars/updatebars/" + _id,
      data: updateBar,
      headers: { "Content-Type": "application/json" },
    });
  },
  getBars: function () {
    return axios({
      method: "GET",
      url: "/bars/getbars",
      headers: { "Content-Type": "application/json" },
    });
  },
  deleteBars: function (_id) {
    console.log(_id);
    return axios({
      method: "DELETE",
      url: "/bars/deletebars/" + _id,
      headers: { "Content-Type": "application/json" },
    });
  },
};
