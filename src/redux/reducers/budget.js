import * as types from "../actions/types";

const INTIAL_STATE = {
  isLoading: false,
  error: null,
  budgets: [],
};

export default function budgetReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_BUDGET:
      return { ...state, isLoading: true };
    case types.CREATE_BUDGET_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
        budget: action.payload,
      };
    case types.CREATE_BUDGET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case types.GET_BUDGETS:
      return { ...state, isLoading: true };
    case types.GET_BUDGETS_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
        budgets: action.payload,
      };
    case types.GET_BUDGETS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case types.UPDATE_BUDGET:
      return { ...state, isLoading: true };
    case types.UPDATE_BUDGET_SUCCESS:
      return {
        ...state,
        isNewUser: false,
        isLoading: false,
      };
    case types.UPDATE_BUDGET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}