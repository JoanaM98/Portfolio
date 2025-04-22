import React, { useState } from "react";
import Joana from "../assets/Joana.jpg";
import Item from "./Item";
import SoftSkills from "./Skills/SoftSkills";
import HardSkills from "./Skills/HardSkills";
import MoreAboutMe from "./MoreAboutMe"

//Icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function About() {
  const [showEducationDetails, setShowEducationDetails] = useState("hidden");
  const [showWorkDetails, setShowWorkDetails] = useState("hidden");

  function toggleDetails(setter) {
    setter((prev) => {
      if (prev === "hidden") {
        return "items-visible";
      } else if (prev === "items-visible") {
        setTimeout(() => {
          setter("hidden");
        }, 300);
        return "hidding";
      } else if (prev === "hidding") {
        return;
      }
    });
  }

  return (
    <div id="about" className="container">
      <div id="about-intro">
      <div>
              <div>
        
          <h3 className="name">Hi, I'm<span> Joana.</span></h3>
          <p>
            After a few successful years in consulting, I realized that while I
            was quite good at what I did, I wasn't truly fulfilled. So, I took a leap of faith. </p>
          <p>
            As a passionate problem solver, I'm now learning to code, building
            new skills, and working toward a transition into the digital world.{" "}
          </p>
          <p>
            It's been challenging, sometimes frustrating, but incredibly
            rewarding and I’m excited for what’s ahead.
          </p>
          <p>
            <span>Wish me luck!</span>
          </p>
        </div>
        <div className="profile-image-container">
      <img className="profile-picture" src={Joana} alt="profile-picture" />
      </div>
      </div>
      </div>

      <div id="about-details">
        <div id="education">
          <h4
            id="education-title"
            onClick={() => toggleDetails(setShowEducationDetails)}
          >
            Education
            {showEducationDetails === "items-visible" ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )}
          </h4>
          <div className={`education-items ${showEducationDetails}`}>
            <Item
              entity="Udemy"
              courseJob={["The Complete 2025 Web Development Bootcamp"]}
              dates={["03/2025 - 04/2025"]}
            />
            <Item
              entity="HarvardX"
              courseJob={["CS50's Introduction to Programming with Python"]}
              dates={["12/2024 - 03/2025"]}
            />
            <Item
              entity="Faculdade de Economia da Universidade do Porto"
              courseJob={["Master in Management"]}
              dates={["09/2019 - 09/2021"]}
            />

            <Item
              entity="Udemy"
              courseJob={["The Complete 2021 Web Development Bootcamp"]}
              dates={["12/2020 - 02/2021"]}
            />

            <Item
              entity="Nova School of Business and Economics"
              courseJob={["Bachelor in Management", "Excel Specialist"]}
              dates={["09/2016 - 06/2019", "2018"]}
            />
          </div>
        </div>

        <div id="work-experience">
          <h4 id="work-title" onClick={() => toggleDetails(setShowWorkDetails)}>
            Work Experience
            {showWorkDetails === "items-visible" ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )}
          </h4>
          <div className={`work-items ${showWorkDetails}`}>
            <Item
              entity="Deloitte"
              courseJob={["Global Investment and Innovation Incentives (Gi3)"]}
              dates={[
                "Senior Consultant - 09/2024 - 01/2025",
                "Consultant - 09/2022 - 08/2024",
                "Analyst - 09/2021 - 08/2022",
              ]}
            />

            <Item
              entity="Meliã Madeira Mare Resort & Spa"
              courseJob={["F&B | Reception | Reservations | Purchases"]}
              dates={["Summer Internship - 07/2019 - 08/2019"]}
            />
            <Item
              entity="Porto Bay Hotels & Resorts"
              courseJob={["Stock Management"]}
              dates={["Internship - Janeiro 2019"]}
            />
          </div>
        </div>

        <SoftSkills />
        <HardSkills />
        <MoreAboutMe />
      </div>
    </div>
  );
}

export default About;
