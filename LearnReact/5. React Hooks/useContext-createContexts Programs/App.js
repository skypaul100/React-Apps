//Component2 --> component1 --> App --> index.js

import React, { createContext } from "react";
import Comp1 from "./Comp1";

const Firstnm = createContext();
const Lastnm = createContext();

const App = () => {
  return(
  <React.Fragment>
    <Firstnm.Provider value={"Hulk"}>
    <Lastnm.Provider value={"Kumar"}>
      <Comp1 />
      </Lastnm.Provider>
    </Firstnm.Provider>

  </React.Fragment>);
};

export default App;
export {Firstnm,Lastnm};
