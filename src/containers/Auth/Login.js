import React, { Component } from "react";
// refresh token
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/auth";

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
      this.props.signIn({
        id: profile.getId(),
        first_name: profile.getGivenName(),
        last_name: profile.getFamilyName(),
        email: profile.getEmail(),
      });
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  render() {
    return this.props.isSignedIn ? (
      <Redirect to={{ pathname: "/" }} />
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
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn })(LoginPage);