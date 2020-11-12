import axios from "axios";
const api = {
  ROOT: "http://171.244.141.224:5000",
  TOPLEVEL: "/toplevel",
  TOPCASH: "/topcharges",
};
const baseApi = axios.create({
  baseURL: api.ROOT,
});

export { api, baseApi };
