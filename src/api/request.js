import axios from "axios";

const request = axios.create({
  baseURL: "https://gitee.com/api/v5",
});
export default request;
