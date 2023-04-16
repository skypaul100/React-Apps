//useContext HOOK is used to pass the data directly through
//Multiple Components in chaining.


import React ,{useContext} from "react";
import {Firstnm,Lastnm} from "./App.js";


const Comp2= () => {
    const f_nm = useContext(Firstnm);
    const l_nm = useContext(Lastnm);


    return(
        <React.Fragment>
            <h1>My name is {f_nm} {l_nm}</h1>
        </React.Fragment>
    );

}


export default Comp2;