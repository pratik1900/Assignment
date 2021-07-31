import state from "./store";
import * as actionType from "./actionTypes";

const initialState = {
  loader: true,
  error: null,
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_USERS_SUCCESS:
      return {
        ...state,
        loader: false,
        error: null,
        data: action.data,
      };
    case actionType.GET_USERS_FAILED:
      return {
        ...state,
        loader: false,
        error: action.errMsg,
        data: null,
      };
    case actionType.GET_USERS_CLEAR:
      return {
        ...state,
        loader: false,
        error: null,
        data: null,
      };

    default:
      return state;
  }
};

export default reducer;
