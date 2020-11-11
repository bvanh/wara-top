import { baseApi } from "./api";
const getTopLevel = (thisObj, api, headersTable) => {
  //console.log(params);
  //let listUsers;
  return baseApi
    .get(api)
    .then((res) => {
      console.log(res.data);
      const { rows } = res.data;
      thisObj.data = rows;
      thisObj.headers = headersTable;
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export { getTopLevel };
