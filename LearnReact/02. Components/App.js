//use this App.js file to import components
//or use the App.jsx file.
//Both works fine in importing components
//Just slight change in syntax
//App.js uses Class and render() 
//App.jsx uses function

import React from "react";
import Heading from "./Heading"; //not require to give .jsx
import List from "./List";
import Para from "./Para";

class App extends React.Component{
render()
{
    return (
    <>
     <Heading/> 
     <Para/>
     <List /> 
     <Para/>
    </>);
}
}
export default App;
