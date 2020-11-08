import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import LoginPage from "./containers/Auth/Login";

import NewProfile from "./containers/AppPage/NewProfile";
import RegisterPage from "./containers/Register"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path='/register' exact component={RegisterPage}/>
        <ProtectedRoute exact path="/" component={Dashboard} />
        <Route path="/settings" component={NewProfile} />
      </Switch>
    </Router>
  );
};

export default App;
