#Driver_code

import React from "react";
import ReactDOM from "react-dom";
// import Heading from "./Heading"; //not require to give .jsx
// import List from "./List";
// import Para from "./Para";
import App from "./App.js";// using class i.e App.js or use below
//import App from "./App.jsx";//uses function to export using App.jsx
//both workks same
ReactDOM.render(
  <>
    <App/>
  </>,

  document.getElementById("root")
);
