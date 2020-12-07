import React, { useState } from "react";
// refresh token
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createFirstBudget } from "../../redux/actions/auth";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  TextField,
  MenuItem,
  Button,
  Container,
  Grid,
  Paper,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

const RegisterPage = ({ isSignedIn, isNewUser, user, createFirstBudget }) => {
  const history = useHistory();
  const classes = useStyles();
  const categories = [
    "General",
    "Technology",
    "Sports & Entertainment",
    "Gifts",
    "Hobbies",
    "Groceries",
  ];

  const handleSubmit = () => {
    history.push("/");
    createFirstBudget(values);
  };

  const [values, setValues] = useState({
    client_id: user ? user.id : null,
    amount: "",
    category: "General",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return isSignedIn === true && isNewUser === false ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (!isSignedIn || isSignedIn === null) &&
    (isNewUser || isNewUser === null) &&
    values.client_id === null ? (
    <Redirect to={{ pathname: "/login" }} />
  ) : (
    <Container style={{ marginTop: "30vh", width: "75vw" }}>
      <Paper
        className={useStyles.paper}
        style={{
          textAlign: "center",
          height: "40vh",
          backgroundColor: "#F9DAE4",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <h2>Create Your First Budget</h2>
              <Grid item container>
                <Grid
                  xs={12}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                      Amount
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      value={values.amount}
                      onChange={handleChange("amount")}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Category"
                    value={values.category}
                    onChange={handleChange("category")}
                    helperText="Please select your Category"
                    variant="outlined"
                    color="secondary"
                    style={{ width: "50vw", marginTop: 30 }}
                  >
                    {categories.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>

              <Button
                style={{ marginTop: 30 , background:'white'}}
                type="submit"
                disabled={values.amount === ""}
              >
                Create new budget
              </Button>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    isNewUser: state.auth.isNewUser,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { createFirstBudget })(RegisterPage);
