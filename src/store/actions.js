import * as actionTypes from "./actionTypes";

export const getUsersSuccess = data => {
  return {
    type: actionTypes.GET_USERS_SUCCESS,
    data,
  };
};

export const getUsersFailed = errMsg => {
  return {
    type: actionTypes.GET_USERS_FAILED,
    errMsg,
  };
};

export const getUsersClear = () => {
  return {
    type: actionTypes.GET_USERS_CLEAR,
  };
};
