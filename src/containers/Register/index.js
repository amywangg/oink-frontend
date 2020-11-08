import React from "react";
// refresh token
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions/auth";

// import { withStyles } from "@material-ui/styles";
// import {styles} from "./styles";

const RegisterPage = ({isSignedIn, isNewUser, user}) => {
  return isSignedIn && isNewUser === false ? (
    <Redirect to={{ pathname: "/" }} />
  ) : !isSignedIn && isNewUser ? (
    <Redirect to={{ pathname: "/login" }} />
  ) : (
    <div>
      I AM REGISTER
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isNewUser: state.auth.isNewUser,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { createUser })(RegisterPage);
