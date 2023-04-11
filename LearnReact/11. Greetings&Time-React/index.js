#Driver_code_in_src_folder
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = "Morning";
  cssStyle.color = "blue";
} else if (currDate >= 12 && currDate < 16) {
  greeting = "Yellow";
} else if (currDate >= 16 && currDate < 20) {
  greeting = "Evening";
  cssStyle.color = "green";
} else {
  greeting = "Night";
  cssStyle.color = "black";
}

ReactDOM.render(
  <>
    <h1 style={{ color: "purple" }}>
      Hello Guys,<span style={cssStyle}> Good {greeting}</span>
      <p style={{ color: "red" }}>
        Time is: {currDate} in {greeting}
      </p>
    </h1>
  </>,
  document.getElementById("root")
);
