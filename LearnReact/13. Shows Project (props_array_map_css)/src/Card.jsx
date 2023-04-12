import React from "react";

//function Card(props)
//props or properties which are the arguments of func/component
// any name can be used
const Card= (props) => { 
    return(
       <div className="cards">
        <div className="card">
         <img src={props.imgsrc} alt="pic" className="card_img" />
          <div className="card_info">
           <span className="card_category"> Disney+ Show </span>
            <h3 className="card_title">{props.title} </h3>
          
           <a href={props.showLink} target="blank">
             <button>Watch Now</button>
           </a>
         </div>
       </div>
     </div>
   
    );
    }

    export default Card;