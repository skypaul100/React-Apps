//Main component

import React from "react";


function App(){
let currDate = new Date();
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = "Morning";
  cssStyle.color = "blue";
} else if (currDate >= 12 && currDate < 16) {
  greeting = "afternoon";
  cssStyle.color="green";
} else if (currDate >= 16 && currDate < 20) {
  greeting = "Evening";
  cssStyle.color = "green";
} else {
  greeting = "Night";
  cssStyle.color = "black";
}

return(
  <div>
    <h1>
      Hello Guys,<span style={cssStyle}> Good {greeting}</span>    
   </h1>
  </div>);
}
export default App;
