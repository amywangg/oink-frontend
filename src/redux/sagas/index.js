import { all } from "redux-saga/effects";
import * as authSagas from "./auth";

export default function* rootSaga() {
  yield all([authSagas.userWatcher()]);
}
