import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends Component {
  render() {
    const Component = this.props.component;
    return this.props.isSignedIn ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(ProtectedRoute);
