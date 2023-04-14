import React, { useState } from "react";

const App = () =>{

  const [firstName , setFirstName] = useState("");
  const [lastName ,setLastName] = useState("");
  const [printFirstName,setPrintFirstName] = useState();
  const [printLastName,setPrintLastName] = useState();

  const inputEvent1st = (event)=>{
    setFirstName(event.target.value);//Controlled Component in React
 }
 const inputEventLast = (event)=>{
  setLastName(event.target.value);//Controlled Component in React
}
  const onSubmit = (event)=>{
    event.preventDefault(); //prevents the form page from refreshing itself
    setPrintFirstName(firstName);
    setPrintLastName(lastName);
  
  }

  return(
  <React.Fragment>
    <div className="main_div">
      <form>
        <div>
          <h1>Hello "{printFirstName} {printLastName}" </h1>
          <input 
           type="text"
           placeholder="Enter your First Name"
           onChange={inputEvent1st}
           value={firstName}
          />
        <br/>
        <input
           type="text"
           placeholder="Enter your Last Name"
           onChange={inputEventLast}
           value={lastName}
          />
      <button 
       type="submit"
       onClick={onSubmit}> Submit me!
      </button>
      </div>
    </form>
  </div>
</React.Fragment>);
}
export default App;