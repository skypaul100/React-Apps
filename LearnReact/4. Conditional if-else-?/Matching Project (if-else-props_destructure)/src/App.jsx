import React from "react";
import Match from "./Match";


const App=()=>{
    return (
    <React.Fragment>
       <h2 className="heading_style">
        Matching using <span style={{ fontWeight:'bold',fontSize:'30px'}}>if-else</span>
        </h2>
   
      <Match a='10' b='10' c='10' />  

      <Match a='10' b='130' c='140' /> 

      <Match a='A' b='A' c='A' /> 
    </React.Fragment>);
}

export default App;