import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
