import React from "react";

function  TodoList(props)
{
  
  
 {/* <li>{inputList}</li> */}
 return(
 <React.Fragment>
     <div>
  
  <li>
    <button 
    className="button_del"
    onClick={()=>{props.onSelect(props.id);}} >x</button>
    {props.text}    
</li>
    </div>
</React.Fragment>
 );

}
export default TodoList;
