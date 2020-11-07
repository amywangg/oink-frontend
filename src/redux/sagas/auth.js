import {
  call,
  put,
  take,
  takeLatest,
  actionChannel,
  all,
} from "redux-saga/effects";
import * as types from "../actions/types";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// create new user
function* createUser(action) {
  try {
    const user = action.payload;
    const userDetails = yield axios
      .post(`${API_URL}/user/signup`, user)
      .then((response) => response.data);
    yield put({
      type: types.CREATE_USER_SUCCESS,
      data: userDetails,
    });
  } catch (error) {
    yield put({ type: types.CREATE_USER_FAILED, error });
  }
}

// see if user exists in system
function* fetchUserDetails(action) {
  try {
    const user_id = action.payload.id;
    const userDetails = yield axios
      .get(`${API_URL}/user/${user_id}`)
      .then((response) => response.data);

    if (userDetails === null) {
      // if user data cannot be retrieved then proceed to registration process
      // yield put({ type: types.CREATE_USER, data: action.payload });
      yield call(createUser, action)
    } else {
      yield put({ type: types.GET_USER_SUCCESS, data: userDetails });
    }
  } catch (error) {
    yield put({ type: types.GET_USER_FAILURE, error });
  }
}

export function* userWatcher() {
  const userChannel = yield actionChannel(types.GET_USER);
  while (true) {
    const action = yield take(userChannel);
    yield call(fetchUserDetails, action);
  }
}
export function* authSaga() {
  yield all([takeLatest(types.CREATE_USER, createUser)]);
}
