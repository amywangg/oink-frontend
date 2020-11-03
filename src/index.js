import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux/reducers";
import { muiTheme } from "./theme";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
