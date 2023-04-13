//React hooks: useState
//takes/gives 2 things: [value,function]

import React,{useState} from "react";




const App= () => {
  
  //const state=useState();//destructuring
  const [count,setCount] = useState(1); // CURRENT DATA +UPDATED DATA = INTIAL DATA
  //count=1

  let IncNum =  () => setCount(count+1);
 

  return (
    <React.Fragment>
       <h2>Increment Values using React Hook</h2>
       <h1 className="heading_style">{count}</h1>
       <button onClick={IncNum} >Click </button>

    </React.Fragment>


  );
}

export default App;