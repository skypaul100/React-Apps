import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{

    return(
        <>
          {/* <a href="/about">About </a>
          <a href="/contact">Contact</a> 

          Anchor Tag <a href=""> Reloads page everytime
          So, Using {Link} or use {NavLink}*/}

          <Link to="/">Home </Link>
          <Link to='/about'>About Us </Link>
          <Link to='/contact'>Contact Us</Link>
          
        </>
    );
}

export default Navbar;