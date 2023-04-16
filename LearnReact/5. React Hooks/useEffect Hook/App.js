//useEffect HOOK used to do Some task 
//like ALERT() after RENDER()

import React, { useEffect, useState } from "react";

const App = () => {
const [num , setNum] = useState(0);

useEffect(()=>
{
    alert("clicked");
},[]);

const IncFunc= ()=>
{
    setNum(num+1);
}

  return (
  <React.Fragment>
    <h1>{num}</h1>
    <button onClick={IncFunc}>Click</button>
  </React.Fragment>);
};

export default App;
