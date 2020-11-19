import axios from "axios";
const api = {
  ROOT: "http://171.244.141.224:5000",
  TOPLEVEL: "/toplevel",
  TOPCASH: "/topcharges",
  USER_INFO: "/getuserinfo",
  CHARGES_BY_USER: "/chargesbyuser",
};
const baseApi = axios.create({
  baseURL: api.ROOT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export { api, baseApi };
