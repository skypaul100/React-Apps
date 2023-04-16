import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  const Name = () => {
    return <h1>Welcome to my name Page</h1>;
  };
  return (
    <>
      <Navbar />
      <Routes>
        {/* Can use any as per requirement: Component/element/render
        Basic is component and element */}
        <Route path="/" Component={() => <Home />} />
        <Route exact path="/about" element={ <About/>} />
        <Route path="/contact" Component={Contact} />
        <Route path="/contact/name" Component={Name} />
        <Route Component={Error} />
      </Routes>

      {/* <About/>
     <Contact/> */}
    </>
  );
};

export default App;
