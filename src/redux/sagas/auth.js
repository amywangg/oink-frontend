import { put, call } from "redux-saga/effects";
import {
  registerUserService,
  loginUserService,
} from "../services/authenticationService";

import * as types from "../actions";

export function* authorizeWithGoogle() {
  const provider = PROVIDER.GOOGLE;
  try {
    if (!googleAuthAvailable()) {
      yield call(
        () =>
          new Promise((resolve) =>
            loadScript(GOOGLE_SCRIPT, () => {
              const g = window.gapi;
              g.load("auth2", () => {
                g.auth2.init({
                  client_id: GOOGLE_CLIENT_ID,
                  scope: GOOGLE_SCOPE,
                });
                resolve();
              });
            })
          )
      );
    }
    const ga = window.gapi.auth2.getAuthInstance();
    const googleUser = yield call(
      () => new Promise((resolve, reject) => ga.signIn().then(resolve, reject))
    );
    const { id_token } = googleUser.getAuthResponse();

    yield* authorize(provider, id_token);
  } catch (err) {
    reportError(provider, err);
  }
}
