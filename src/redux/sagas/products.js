import { put, takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// see if user exists in system
function* getItems({ payload }) {
  try {
    const user_id = payload.id;
    const items = yield axios
      .get(`${API_URL}/item/user/${user_id}`)
      .then((response) => response.data);
    yield put({ type: types.GET_ITEMS_SUCCESS, items });
  } catch (error) {
    yield put({ type: types.GET_ITEMS_FAILURE, error });
  }
}

export function* watchGetItems() {
  yield takeLatest(types.GET_ITEMS, getItems);
}

// see if user exists in system
function* getPurchases({ payload }) {
  try {
    const user_id = payload.id;
    const items = yield axios
      .get(`${API_URL}/purchase/user/${user_id}`)
      .then((response) => response.data);
    yield put({ type: types.GET_ITEMS_SUCCESS, items });
  } catch (error) {
    yield put({ type: types.GET_ITEMS_FAILURE, error });
  }
}

export function* watchGetPurchases() {
  yield takeLatest(types.GET_PURCHASES, getPurchases);
}

export default function* productSaga() {
  yield all([watchGetItems(), watchGetPurchases()]);
}
