import "./Navbar.css"


import React, {useState} from "react";
import {Link} from "react-scroll"

import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
   const[click, setClick] = useState(false);
   const handleCLick=()=> setClick(!click);

   const [color, setColor] = useState(false);
   const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true); 
    }else{
      setColor(false);
    }
   };

   window.addEventListener("scroll", changeColor);
   
  return (
    <div className={color ? " header header-bg" : "header"}>
        <Link to="home"  spy={true} smooth={true} offset={50} duration={500}>
        <h1 className="omkar">CONSULTRON.Inc</h1>
        </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
            </li>
            <li>
                <Link to="functions" spy={true} smooth={true} offset={50} duration={500} >Function</Link>
            </li>
            <li>
                <Link to="operations" spy={true} smooth={true} offset={50} duration={500}>Operations</Link>
            </li>
            <li>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                
            </li>
            
          </ul>
          <div className="hamburger" onClick={handleCLick}>
           {click ? (
            <FaTimes size={20} style={{color: "#fff"}}/>): (
              <FaBars size={20} style={{color: "#fff"}} />
            
           )}
          </div>
      
    </div>
  )
}

export default Navbar
