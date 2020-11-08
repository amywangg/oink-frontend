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
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

// import { withStyles } from "@material-ui/styles";
// import {styles} from "./styles";

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
    createFirstBudget(values);
    history.push("/");
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
    <form onSubmit={handleSubmit}>
      <h2>Create Your First Budget</h2>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.amount}
          onChange={handleChange("amount")}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <TextField
        id="outlined-select-currency"
        select
        label="Category"
        value={values.category}
        onChange={handleChange("category")}
        helperText="Please select your Category"
        variant="outlined"
        color="secondary"
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <br />
      <Button type="submit" disabled={values.amount === ""}>
        Create new budget
      </Button>
    </form>
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
