import React from "react";
import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";

function Footer() {
  return (
    <footer>
     <p>Made with <span>love</span> and <span> coffee </span> |&nbsp; &copy;{new Date().getFullYear()} Joana Martins</p>
  
           <div>
        <a href="https://www.linkedin.com/in/joana-martinss/" target="_blank">
          <SiLinkedin  className="social-icon"
           />{" "}
        </a>
        <a href="https://github.com/JoanaM98" target="_blank">
          <SiGithub className="social-icon"
           />
        </a>
        <a href="https://www.instagram.com/joanamartinsss" target="_blank">
          <SiInstagram className="social-icon"
           />{" "}
        </a>
      </div>
     
       </footer>
  );
}

export default Footer;
