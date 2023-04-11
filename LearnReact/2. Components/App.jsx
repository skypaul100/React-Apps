//Component file name  always starts with capital letter then .jsx
import React from "react";
import Heading from "./Heading"; //not require to give .jsx
import List from "./List";
import Para from "./Para";

function App()
{
    return (
    <>
     <Heading/> 
     <Para/>
     <List /> 
     <Para/>
    </>);
}

export default App;
