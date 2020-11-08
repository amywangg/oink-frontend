import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { muiTheme } from "./theme";

import configureStore from "./utils/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
