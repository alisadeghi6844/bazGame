import React from "react";
import App from "./container/App";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"));