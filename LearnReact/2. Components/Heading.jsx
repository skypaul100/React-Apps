//always name component file in Capital letter 1st
//.jsx to understand that it is component; 
//react is required here to manage jsx(html) files
//this is a components: A function that returns html elements
//components works like the usual elements when imported

import React from "react";

//this fn is called a component
//who returns html (jsx) elements
function Heading(){

    return  (<h1>I live in India</h1>);
}
export default Heading; 
//not Heading() 0/w it will call here
