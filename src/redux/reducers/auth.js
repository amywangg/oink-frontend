import * as types from "../actions/types";

const INTIAL_STATE = {
  isNewUser: null,
  isSignedIn: !!localStorage.getItem("user"),
  user: JSON.parse(localStorage.getItem("user")) || {},
  isLoading: false,
  error: null
};

export default function authReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    // actions for google authentication
    case types.SIGN_IN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isSignedIn: true,
        isLoading: true,
        user: action.payload,
      };
    case types.SIGN_OUT:
      localStorage.removeItem("user");
      return { ...state, isSignedIn: false, user: {} };
    // actions for user retrieval from api
    case types.GET_USER:
      return { ...state, isLoading: true };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        isNewUser: true,
        isLoading: false,
        error: action.error,
      };
    case types.CREATE_USER:
      return { ...state, isNewUser: true, isLoading: true };
    case types.CREATE_USER_SUCCESS:
      return {
        ...state,
        isNewUser: true, 
        isLoading: false,
      };
    case types.CREATE_USER_FAILED:
      return {
        ...state,
        isSignedIn: false,
        isLoading: false,
        error: action.error,
      };
    case types.CREATE_FIRST_BUDGET:
      return { ...state, isLoading: true };
    case types.CREATE_FIRST_BUDGET_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
      };
    case types.CREATE_FIRST_BUDGET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    /*case types.UPDATE_BUDGET:
      return { ...state, isLoading: true};
    case types.UPDATE_BUDGET_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
      };
    case types.UPDATE_BUDGET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }*/
    default:
      return state;
  }
}
