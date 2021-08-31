import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.less";

import store from "./redux/create";
import Candidates from "./screens/Candidates";

ReactDOM.render(
  <Provider store={store}>
    <Candidates />
  </Provider>,
  document.querySelector("#root")
);
