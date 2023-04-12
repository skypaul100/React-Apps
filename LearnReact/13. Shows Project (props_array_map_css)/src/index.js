import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import ShowData from "./ShowData";

const allCards=(val) => {
     return(
        <Card 
       imgsrc= {val.imgsrc}
       showLink={val.showLink}
       title= {val.title}
        
        />
     );
}
ReactDOM.render(
  <React.Fragment>
    <h1 className="heading_style">List of Good Shows to Watch</h1>
     
     {ShowData.map(allCards)}
   
    {/* map fn() completes all the work of multiple input at once
     <Card 
      imgsrc= {ShowData[0].imgsrc}
      showLink={ShowData[0].showLink}
      title= {ShowData[0].title}
    />
    <Card 
      imgsrc= {ShowData[1].imgsrc}
      showLink={ShowData[1].showLink}
      title= {ShowData[1].title}
    />
*/}
  </React.Fragment>,
  document.getElementById("root")
);
