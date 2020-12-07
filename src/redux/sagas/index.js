import { fork } from "redux-saga/effects";
import authSaga from "./auth";
import productSaga from "./products";
import budgetSaga from "./budget";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(budgetSaga);
  yield fork(productSaga);
}
