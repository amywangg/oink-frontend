import React, { Component } from "react";
// refresh token
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn, getUser } from "../../redux/actions/auth";

// import { withStyles } from "@material-ui/styles";
// import {styles} from "./styles";

const clientId =
  "719809811606-vp65cuc29d77cajpuec06vl1g0hnfr0r.apps.googleusercontent.com";

class LoginPage extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: clientId,
          scope: "profile email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      var profile = this.auth.currentUser.get().getBasicProfile();
      var payload = {
        id: profile.getId(),
        first_name: profile.getGivenName(),
        last_name: profile.getFamilyName(),
        email: profile.getEmail(),
      };
      this.props.signIn(payload);
      this.props.getUser(payload);
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  render() {
    return this.props.isSignedIn && this.props.isNewUser === false ? (
      <Redirect to={{ pathname: "/" }} />
    ) : this.props.isSignedIn && this.props.isNewUser ? (
      <Redirect to={{ pathname: "/register" }} />
    ) : (
      <div>
        <button onClick={this.onSignInClick} className="button">
          <img
            src="assets/google.png"
            alt="google login"
            className="icon"
          ></img>
          <span className="buttonText">Sign in with Google</span>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, isNewUser: state.auth.isNewUser };
};

export default connect(mapStateToProps, { signIn, getUser })(LoginPage);
