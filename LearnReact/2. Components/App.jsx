//use this App.jsx file to import components
//or use the App.js file.
//Both works fine in importing components
//Just slight change in syntax
//App.js uses Class and render() 
//App.jsx uses function


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
