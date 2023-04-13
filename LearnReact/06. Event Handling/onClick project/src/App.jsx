import React, { useState } from "react";

const App = () =>{
  const purple='#8e44ad';
  const [bg , setbg]=useState(purple);
  const [name , setname]=useState("Click me!");
    
   const bgChange = () => {
     let newbg='green';
     setbg(newbg);
     setname('clicked');

   }; 
  return(
  <div style = {{backgroundColor : bg}}>
    <h1>Event Handling</h1>

  <button onClick={bgChange }>{name}</button>
  </div>);
}

export default App;