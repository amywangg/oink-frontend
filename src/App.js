import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import LoginPage from "./containers/Auth/Login";
import RegisterPage from "./containers/Register"
import Settings from "./containers/AppPage/Settings";

const App = () => {
  return (
    <Router>
      <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
        <ProtectedRoute path="/settings" component={Settings} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </Router>
  );
};

export default App;
