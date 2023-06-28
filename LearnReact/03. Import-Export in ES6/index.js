import React from "react";
import ReactDOM from "react-dom";
import name1, {name0 , name2 ,fnName } from "./App";
//1st name1 is default therefore outside braces and name can be anything als.
//Inside braces are not default and name must match the var/fn name in exporting file

ReactDOM.render(
  <div>
    <ol>Import/Export in ES6//import
      <li>{name0()}</li>
      <li>{name1}</li>
      <li>{name2}</li>
      <li>{fnName ()}</li>
    </ol>
  </div>,
  document.getElementById("root")
);
