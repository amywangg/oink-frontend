import React, { Component } from "react";
// refresh token
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/auth";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Container, Button, Box, Paper } from "@material-ui/core";
import oinkIcon2 from "../../assets/oink-icon-2.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © Oink "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(30),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
      <Container style={{ marginTop: "30vh", width: "75vw" }}>
        <Paper
          className={useStyles.paper}
          style={{
            textAlign: "center",
            height: "30vh",
            backgroundColor: "#F9DAE4",
          }}
        >
          <Grid container>
            <Grid item xs={12} style={{ marginTop: 50 }}>
              <Typography variant="h4" >
                Sign Up for Oink!
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 40 }}>
              <Button
                onClick={this.onSignInClick}
                fullWidth
                variant="contained"
                color="secondary"
                className={useStyles.submit}
                style={{ width: "50vw" }}
              >
                Google Login
              </Button>
            </Grid>
          </Grid>

          <Box mt={8}>
            <Copyright />
          </Box>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, isNewUser: state.auth.isNewUser };
};

export default connect(mapStateToProps, { signIn })(LoginPage);
