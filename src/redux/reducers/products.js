import * as types from "../actions/types";

const INTIAL_STATE = {
  isLoading: false,
  error: null,
  items: {},
  purchases: {},
};

export default function productsReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case types.GET_ITEMS:
      return { ...state, isLoading: true };
    case types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
      };
    case types.GET_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case types.GET_PURCHASES:
      return { ...state, isLoading: true };
    case types.GET_PURCHASES_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
      };
    case types.GET_PURCHASES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
