import { api, baseApi } from "./api";
const { TOPCASH } = api;
const getTopList = (thisObj, api, headersTable) => {
  //console.log(params);
  //let listUsers;
  return baseApi
    .get(api)
    .then((res) => {
      if (api === TOPCASH) {
        const dataCash = res.data.sort(
          (a, b) => Number(b.total_cash) - Number(a.total_cash)
        );
        thisObj.data = dataCash.slice(0, 20);
      } else {
        const { rows } = res.data;
        thisObj.data = rows;
      }
      thisObj.headers = headersTable;
      thisObj.page = 1;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export { getTopList };
