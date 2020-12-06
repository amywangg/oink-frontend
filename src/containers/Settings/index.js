import React, { useState } from "react";
import AppPage from "../AppPage/index";
import { connect } from "react-redux";
import {
  Grid,
  Container,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  makeStyles,

  Button,
} from "@material-ui/core";
import BudgetHistory from "./BudgetHistory";
import { createBudget} from "../../redux/actions/budget";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

const SettingPage = ({ user, createBudget }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
  });


  const handleSubmit = () => {
    createBudget({
      client_id: user.id,
      category: "General",
      amount: values.amount,
    });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <AppPage>
      <Container>
        <h1>Settings</h1>
        <h3>Current Budget ({month[new Date().getMonth()]})</h3>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth className={classes.margin}>
                <InputLabel
                  color="secondary"
                  htmlFor="standard-adornment-amount"
                >
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
                <Button
                  style={{ marginTop: 10 }}
                  variant="contained"
                  type="submit"
                  color="primary"
                  disabled={values.amount === 0 || values.amount === ""}
                >
                  Save Budget
                </Button>
              </FormControl>
            </form>
          </Grid>
          <Grid item xs={12}>
            <BudgetHistory />
          </Grid>
        </Grid>
      </Container>
    </AppPage>
  );
};

const mapStateToProps = (state) => {
  return { user: state.auth.user };
};

export default connect(mapStateToProps, { createBudget })(
  SettingPage
);
