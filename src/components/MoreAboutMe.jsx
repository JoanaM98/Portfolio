import React, { useState } from "react";
import BoardGame from "../assets/about-images/boardgame.jpg";
import Handball from "../assets/about-images/handball.jpg";
import Foosball from "../assets/about-images/foosball.jpg";
import Porto from "../assets/about-images/porto.jpg";
import Madeira from "../assets/about-images/madeira.jpg";
import Miranda from "../assets/about-images/miranda.jpeg";
import Formula1 from "../assets/about-images/formula1.jpg";
import Cruise from "../assets/about-images/cruise.jpg";

//Icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function MoreAboutMe() {
  const [MoreDetails, setMoreDetails] = useState("hidden");

  function toggleDetails() {
    setMoreDetails((prev) => {
      if (prev === "hidden") {
        return "items-visible";
      } else if (prev === "items-visible") {
        setTimeout(() => {
          setMoreDetails("hidden");
        }, 300);
        return "hidding";
      } else if (prev === "hidding") {
        return;
      }
    });
  }

  return (
    <div id="more-about-me">
      <h4 onClick={() => toggleDetails()}>
        More About Me
        {MoreDetails === "items-visible" ? (
          <IoIosArrowUp />
        ) : (
          <IoIosArrowDown />
        )}
      </h4>
      <div className={MoreDetails}>
        <div id="more-about-me-container">
        <div className="about-images-container">
        <div className="image-container">
            <img className="about-image" src={Madeira} alt="Madeira Island Photo"/>
            </div>
            <div className="image-container">
            <img className="about-image" src={Formula1} alt="Formula 1 Photo"/></div>
            
            <div className="image-container">
            <img className="about-image" src={Porto} alt="Porto Photo"/></div>
            <div className="image-container">
            <img className="about-image" src={Handball} alt="Handball Photo"/></div>
            </div>
            
          <div className="about-text">
            <p>
              I’m originally from the beautiful island of <span>Madeira</span>,
              where I lived until about 18. Since then, I’ve hopped around a
              bit—swapped the ocean views for city life in <span>Lisbon</span>,
              where I did my bachelor’s (with a short adventure in{" "}
              <span>Rome</span>), then headed to <span>Porto</span> for my
              master’s, and now I’m living in the charming little town of{" "}
              <span>Miranda do Douro</span>.
            </p>
            <p>
              I’ve always loved <b>sports</b> - played handball for years and now
              I’m trying to master futsal (emphasis on <i>trying</i>).
              I’m also into volleyball, basketball, foosball, ping pong…
              basically anything that involves a ball and some friendly
              competition.
            </p>

            <p>
              I’m a die-hard <b>Formula 1</b> fan and loyal Ferrari supporter (which
              basically means I've signed up for a lifetime of heartbreak,
              chaos, and questionable strategy calls). Carlos Sainz is my
              guy, but I’m still holding out hope for a proper Daniel Ricciardo
              comeback (yes, i'm dellusional).
            </p>
            <p>
              When I’m not watching cars zooming around, you'll find me solving <b>puzzles</b>, diving into new <b>board games</b>, watching a <b>series</b>, or (most likely) planning my next <b>cruise</b>.
            </p>
            <p>
              Oh, and I <b>crochet</b> now. Combine that with my love for 80s and 90s
              music, and I’ve fully accepted my inner grandma. <br/> She’s thriving.
            </p>
            <p>
            In short, I’m the kind of person who’ll never say no to a challenge  (and maybe a dash of mayhem), thriving in the space between <q>let’s do this</q> and <q>what have I gotten myself into?</q>
                </p>
            <p className="reach-out">
              If any of that resonates with you, reach out!
            </p>
          </div>
            <div className="about-images-container">
            
            <div className="image-container">
            <img className="about-image" src={BoardGame} alt="Board Game Photo"/>
            </div>
            <div className="image-container">
            <img className="about-image" src={Miranda} alt="Miranda do Douro Photo"/></div>          
                       <div className="image-container">
            <img className="about-image" src={Foosball} alt="Foosball Photo"/></div>
            <div className="image-container">
            <img className="about-image" src={Cruise} alt="Cruise Photo"/></div>
             
            </div>
        </div>
      </div>
    </div>
  );
}

export default MoreAboutMe;
