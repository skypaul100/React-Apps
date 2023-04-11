import React from "react";
import ReactDOM from "react-dom";
import {add, sub, mul , div} from "./App.jsx";

ReactDOM.render(
  <div><h3>Basic Calculator using import & export</h3>
    <li>Sum is: {add(10, 5)}</li>
    <li>Difference is: {sub(10, 5)}</li>
    <li>Product is: {mul(10, 10)}</li>
    <li>Divison is: {div(10, 7)}</li>
  </div>,
  document.getElementById("root")
);
