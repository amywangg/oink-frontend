import * as types from "./types";

export function getBudgets() {
  return { type: types.GET_BUDGETS };
}

export function getBudgetsSuccess(budget) {
  return { type: types.GET_BUDGETS_SUCCESS, budget };
}

export function getBudgetsError(error) {
  return { type: types.GET_BUDGETS_FAILURE, error };
}