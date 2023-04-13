//React hooks: useState
//takes/gives 2 things: [value,function]

import React,{useState} from "react";

const App = () => {
  let currTime=new Date().toLocaleTimeString();
  
  const [cTime , setcTime] = useState(currTime);

  const updateTime = () => {
    currTime = new Date().toLocaleTimeString();;
    setcTime(currTime);
  }
  return (
   <div>
     <h2> Current Clock Time </h2>
     <h1>{cTime}</h1>
     <button onClick={updateTime}>  Get updated time</button>
   </div>

  );
}
export default App;