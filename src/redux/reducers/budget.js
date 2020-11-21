import * as types from "../actions/types";

const INTIAL_STATE = {
  isLoading: false,
};

export default function budgetReducer(state = INTIAL_STATE, action) {
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
    case types.CREATE__FIRST_BUDGET_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
