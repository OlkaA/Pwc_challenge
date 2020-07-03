import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode basename="/pwc">
    <App />
  </React.StrictMode>,
  rootElement
);
