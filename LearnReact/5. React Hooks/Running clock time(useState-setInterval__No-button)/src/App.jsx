//React hooks: useState
//takes/gives 2 things: [value,function]
//clock time running
//using setInterval()

import React,{useState} from "react";

const App = () => {

  let currTime=new Date().toLocaleTimeString();
  
  const [cTime , setcTime] = useState(currTime);

  const updateTime = () => {
    currTime=new Date().toLocaleTimeString();
    setcTime(currTime);
  }
 
  setInterval(updateTime,1000); // update time every 1000ms
  return (
   <>
    <h3>Current Running Clock Time </h3>
    <p>Without Button | Using setInterval()</p>
     <h1>{cTime}</h1>
     {/* <button onClick={updateTime}>Get Update Time</button> */}

   </>

  );


}
export default App;