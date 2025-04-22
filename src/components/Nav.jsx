import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { VscMenu } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";

function Nav() {
const [scrolled, setScrolled] = useState(false);


const handleScroll = () => {
  if (window.scrollY > 50) {
    setScrolled(true);
  } else {
    setScrolled(false);
  }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const[menuShown, setMenuShown] = useState("menu-hidden");
  function toggleMenu(){
   setMenuShown(
    (prev) => {if(prev==="menu-hidden") {return "menu-visible"} else if(prev==="menu-visible") {setTimeout(() => {setMenuShown("menu-hidden")},300);return "menu-hidding";}else{
      return "menu-hidden"
    }
  });}


  function handleLinkClick() {
    setMenuShown("menu-hidding");
    setTimeout(() => {setMenuShown("menu-hidden")});
  }

  return (
    <div id="navigation" className={scrolled&&"scrolled"}>
    <div id="top-nav" className={menuShown=="menu-visible"?"cross-icon":null}>
    {menuShown=="menu-visible"?<RxCross1 onClick={toggleMenu} className="icon-cross" id="menu-icon"/>:<VscMenu onClick={toggleMenu} id="menu-icon"/>}
    </div>
    <div id="nav-bar">
      <ul className={menuShown}>
    <li><Link onClick={handleLinkClick} to="/"> Home </Link></li>
        <li><Link onClick={handleLinkClick}to="/about"> About </Link></li>
        <li><Link onClick={handleLinkClick}to="/projects"> Projects </Link></li>
        <li><Link onClick={handleLinkClick}to="/contacts"> Contact Me </Link></li>
    </ul>

    </div>
    </div>);
}


export default Nav;
