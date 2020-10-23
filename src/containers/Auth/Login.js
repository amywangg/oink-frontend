import React from "react";
import { useGoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "./RefreshToken";
import usePersistedState from "../PersistedState";
import { Redirect } from "react-router-dom";
import "./styles.css";
const createHistory = require("history").createBrowserHistory;

const clientId =
  "769564108089-kjitojja4egodmt4n8qor9jj12af2uh4.apps.googleusercontent.com";
const LoginPage = () => {
  const [loggedIn, setLoggedIn] = usePersistedState("token", false);
  let history = createHistory();
      
  const onSuccess = (res) => {
    history.push("/");
    console.log(res);
    setLoggedIn(true);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
  });

  return localStorage.getItem("token") ? (
    <Redirect to="/" />
  ) : (
    <div className="div-root">
      <button onClick={signIn} className="button">
        <img src="assets/google.png" alt="google login" className="icon"></img>
        <span className="buttonText">Sign in with Google</span>
      </button>
    </div>
  );
};

export default LoginPage;
