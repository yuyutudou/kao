import axios from "axios";
import request from "./request";

const getAccessToken = () => request.post();
export const getOrder = (name, password, clientID, clientSecret, scope) => {
  return axios.post("https://gitee.com/oauth/token", {
    name,
    password,
    clientID,
    clientSecret,
    scope,
  });
};
