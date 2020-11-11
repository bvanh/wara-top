import axios from "axios";
const api = {
  ROOT: "http://localhost:5000",
  TOPLEVEL: "/toplevel",
};
const baseApi = axios.create({
  baseURL: api.ROOT,
});

export { api, baseApi };
