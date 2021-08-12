import React from "react";
import ReactDOM from "react-dom";
import { login } from "./userService";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App login={login} />, rootElement);
