import React from "react";

const Match= (props)=>{
    // let a=10;
    // let b=10;
    // let c=20;

    // let a=props.a;
    // let b=props.b;
    // let c=props.c;
    
    //Destructuring
    let {a, b, c}= props;

    if((a=== b) && (b===c))
     return (
        <div className="inner_Div">
            <h2> {a} {b} {c} </h2>
            <h3>This is Matching</h3>
            <hr/>

        </div>
     );
    else 
    return (
        <div className="inner_Div">
            <h2> {a} {b} {c} </h2>
            <h3>This is Not Matching</h3>
            <hr/>

        </div>
     );
}

export default Match;