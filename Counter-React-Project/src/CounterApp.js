import React, { useState } from "react";

const CounterApp = () => {
  const [countNum, setcountNum] = useState(0);

  function callSetInc() {
    // this function increments the count value
    setcountNum(countNum + 1);
  }
  function callSetDec() {
    // this function decrements the count value
    if (countNum > 0) setcountNum(countNum - 1);
    else alert("Can't count below 0 !");
  }

  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <h2>COUNTER</h2>
          <h1> {countNum} </h1>
          <div className="btn_div">
            <button onClick={callSetInc} className="btn_inc">
              Increment
            </button>
            <button onClick={callSetDec} className="btn_dec">
              Decrement
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CounterApp;
