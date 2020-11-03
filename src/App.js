import React from "react";

import ReactDOM from "react-dom";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "./containers/Dashboard";
import LoginPage from "./containers/Auth/Login";

function App() {
  return ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute exact={true} path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

export default App;
