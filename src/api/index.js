import axios from "axios";

export const getOrder = (name, password, clientID, clientSecret, scope) => {
  return axios.post("https://gitee.com/oauth/token", {
    name,
    password,
    clientID,
    clientSecret,
    scope,
  });
};
