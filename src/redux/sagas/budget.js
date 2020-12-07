import { put, takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// create new user
function* createBudget(action) {
  try {
    const budget = action.payload;
    yield axios
      .post(`${API_URL}/budget/create`, budget)
      .then((response) => response.data);
    yield put({ type: types.CREATE_BUDGET_SUCCESS, budget });
  } catch (error) {
    yield put({ type: types.CREATE_BUDGET_FAILURE, error });
  }
}

export function* watchCreateBudget() {
  yield takeLatest(types.CREATE_BUDGET, createBudget);
}

// BUDGET API
function* getBudgets(action) {
  try {
    const user_id = action.payload;
    const budgets = yield axios
      .get(`${API_URL}/budget/user/${user_id}`)
      .then((response) =>response.data);
    yield put({ type: types.GET_BUDGETS_SUCCESS, budgets });
  } catch (error) {
    yield put({ type: types.GET_BUDGETS_FAILURE, error });
  }
}

export function* watchGetBudgets() {
  yield takeLatest(types.GET_BUDGETS, getBudgets);
}

export default function* budgetSaga() {
  yield all([watchGetBudgets(), watchCreateBudget()]);
}
