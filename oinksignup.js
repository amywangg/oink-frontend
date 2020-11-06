import React, { Component } from "react";
// refresh token
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/auth";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Oink '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(30),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    align: "center",
  },
  submit: {
    margin: theme.spacing(3),
  },
}));

const clientId =
  "719809811606-vp65cuc29d77cajpuec06vl1g0hnfr0r.apps.googleusercontent.com";

//const classes = useStyles();

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
    <container>
      <div className={useStyles.paper}>
        <Avatar className={useStyles.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up for Oink
        </Typography>
        <Button
            onClick={this.onSignInClick}
            fullWidth variant="contained"
            color="primary"
            className={useStyles.submit}>
           Google Login
          </Button>
        <Box mt={8}>
            <Copyright />
        </Box>
      </div>
    </container>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn })(LoginPage);