import { api, baseApi } from "./api";
//import qs from "qs";
const { TOPCASH, USER_INFO } = api;
const getTopList = (thisObj, api, headersTable) => {
  //console.log(params);
  //let listUsers;
  return baseApi
    .get(api)
    .then((res) => {
      //console.log(res);
      if (api === TOPCASH) {
        const dataCash = res.data.sort(
          (a, b) => Number(b.total_cash) - Number(a.total_cash)
        );
        thisObj.data = dataCash;
      } else {
        thisObj.data = res.data;
      }
      thisObj.headers = headersTable;
      thisObj.page = 1;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
const getUserInfo = (thisObj, gameUserId) => {
  return baseApi
    .get(USER_INFO, {
      params: {
        gameUserId: gameUserId,
      },
    })
    .then((res) => {
      //console.log(res);
      const { username } = res.data;
      thisObj.username = username;
    })
    .catch((err) => {
      const { message } = err.response.data;
      thisObj.errorMessage = message;
    });
};
export { getTopList, getUserInfo };
