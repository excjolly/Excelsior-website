import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.less";
import "./assets/styles/_global.scss";

ReactDOM.hydrate(<App />, document.getElementById("root"));
