import * as types from "./types";

export function getBudgets(user_id) {
  return { type: types.GET_BUDGETS, payload: user_id };
}

export function getBudgetsSuccess(budget) {
  return { type: types.GET_BUDGETS_SUCCESS, budget };
}

export function getBudgetsError(error) {
  return { type: types.GET_BUDGETS_FAILURE, error };
}
export function createBudget(budget) {
  return { type: types.CREATE_BUDGET, payload: budget };
}
export function updateBudgets() {
  return { type: types.UPDATE_BUDGET };
}

export function updateBudgetsSuccess(budget) {
  return { type: types.UPDATE_BUDGET_SUCCESS, payload: budget };
}

export function updateBudgetsError(error) {
  return { type: types.UPDATE_BUDGET_FAILURE, error };
}
