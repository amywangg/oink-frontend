import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import LoginPage from "./containers/Auth/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
