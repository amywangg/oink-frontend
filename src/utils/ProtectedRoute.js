import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends Component {
  render() {
    const Component = this.props.component;
    return this.props.isSignedIn && !this.props.isNewUser ? (
      <Component />
    ) : this.props.isSignedIn && this.props.isNewUser ?(
      <Redirect to={{ pathname: "/register" }} />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, isNewUser: state.auth.isNewUser };
};

export default connect(mapStateToProps)(ProtectedRoute);
