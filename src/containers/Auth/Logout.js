import React from "react";
import { useGoogleLogout } from "react-google-login";
import usePersistedState from "../PersistedState";

const clientId =
  "769564108089-kjitojja4egodmt4n8qor9jj12af2uh4.apps.googleusercontent.com";

function LogoutHooks() {
  const onLogoutSuccess = (res) => {
    localStorage.setItem("token", false);
    console.log("Logged out Success");
  };
  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="assets/google.svg" alt="google login" className="icon"></img>
      <span className="buttonText">Sign out</span>
    </button>
  );
}

export default LogoutHooks;
