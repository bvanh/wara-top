import axios from "axios";
const api = {
  ROOT: "http://localhost:5000",
  TOPLEVEL: "/toplevel",
  TOPCASH: "/topcharges",
  USER_INFO: "/getuserinfo",
};
const baseApi = axios.create({
  baseURL: api.ROOT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export { api, baseApi };
