import React, { Component } from "react";
// refresh token
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/auth";

import { Button, IconButton } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

const clientId =
  "719809811606-vp65cuc29d77cajpuec06vl1g0hnfr0r.apps.googleusercontent.com";

class Logout extends Component {
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
    if (!isSignedIn) {
      this.props.signOut();
    }
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    return !this.props.isSignedIn ? (
      <Redirect to={{ pathname: "/login" }} />
    ) : (
      <div>
        {this.props.drawerOpen ? (
          <Button
            onClick={this.onSignOutClick}
            variant="contained"
            color="secondary"
          >
            Sign Out
          </Button>
        ) : (
          <IconButton onClick={this.onSignOutClick} color="secondary">
            <MeetingRoomIcon />
          </IconButton>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signOut })(Logout);