import { api, baseApi } from "./api";
//import qs from "qs";
const { TOPCASH, USER_INFO, CHARGES_BY_USER } = api;
const getTopList = (thisObj, api, headersTable) => {
  //console.log(params);
  //let listUsers;
  return baseApi
    .get(api)
    .then((res) => {
      //console.log(res);
      if (api === TOPCASH) {
        thisObj.data = res.data;
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
      thisObj.username = "";
    });
};
const getChargesByUser = (thisObj, gameUserId) => {
  return baseApi
    .get(CHARGES_BY_USER, {
      params: {
        gameUserId: gameUserId,
      },
    })
    .then((res) => {
     // console.log(res);
      thisObj.detailCharges = res.data;
    })
    .catch((err) => {
      //  const { message } = err.response.data;
       console.log(err)
      // thisObj.errorMessage = message;
      // thisObj.username = "";
    });
};
export { getTopList, getUserInfo, getChargesByUser };
