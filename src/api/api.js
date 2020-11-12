import axios from "axios";
const api = {
  ROOT: "http://localhost:5000",
  TOPLEVEL: "/toplevel",
  TOPCASH: "/topcharges",
};
const baseApi = axios.create({
  baseURL: api.ROOT,
});

export { api, baseApi };
