import { put, takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// create new user
function* createUser({ payload }) {
  try {
    const user = payload;
    const userDetails = yield axios
      .post(`${API_URL}/user/signup`, user)
      .then((response) => response.data);
    yield put({
      type: types.CREATE_USER_SUCCESS,
      data: userDetails,
    });
  } catch (error) {
    yield put({ type: types.CREATE_USER_FAILURE, error });
  }
}

export function* watchCreateUser() {
  yield takeLatest(types.CREATE_USER, createUser);
}

// see if user exists in system
function* fetchUserDetails({ payload }) {
  try {
    const user_id = payload.id;
    const userDetails = yield axios
      .get(`${API_URL}/user/${user_id}`)
      .then((response) => response.data);

    if (userDetails === null) {
      // if user data cannot be retrieved then proceed to registration process
      yield put({ type: types.CREATE_USER, payload });
    } else {
      yield put({ type: types.GET_USER_SUCCESS, userDetails });
    }
  } catch (error) {
    yield put({ type: types.GET_USER_FAILURE, error });
  }
}

export function* watchFirstUser() {
  yield takeLatest(types.SIGN_IN, fetchUserDetails);
}

// create new budget
export function* createFirstBudget(action) {
  try {
    const budget = action.payload;
    const budgetDetails = yield axios
      .post(`${API_URL}/budget/create`, budget)
      .then((response) => response.data);
    yield put({
      type: types.CREATE_FIRST_BUDGET_SUCCESS,
      data: budgetDetails,
    });
  } catch (error) {
    yield put({ type: types.CREATE_FIRST_BUDGET_FAILURE, error });
  }
}

export default function* authSaga() {
  yield all([watchCreateUser(), watchFirstUser()]);
}
