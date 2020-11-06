import * as types from "../actions/types";

const INTIAL_STATE = {
  isNewUser: null,
  isSignedIn: null,
  user: null,
  isLoading: false,
};

export default function authReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    // actions for google authentication
    case types.SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        isLoading: true,
        user: action.payload,
      };
    case types.SIGN_OUT:
      return { ...state, isSignedIn: false, user: null };
    // actions for user retrieval from api
    case types.GET_USER:
      return { ...state, isLoading: true };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
        user_id: action.payload,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        isNewUser: true,
        isLoading: false,
        error: action.error,
      };
    case types.CREATE_USER:
      return { ...state, isNewUser: true, isSignedIn: true, isLoading: true };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        isLoading: false,
        user_id: action.payload,
      };
    case types.CREATE_USER_FAILED:
      return {
        ...state,
        isSignedIn: false,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
