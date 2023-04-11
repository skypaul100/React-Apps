// import React from "react";


const add=( a , b)=>{

  let result=a+b;
  return result;
}
const sub=(a,b)=>{
  let result=a-b;
  return result;
}
const mul=(a,b)=>{
  let result = a*b;

  return result;
}
const div=(a,b)=>{
  let result =a/b;
  result=result.toFixed(2);

  return result;
}


//export default App;

export {add, sub, mul ,div};
