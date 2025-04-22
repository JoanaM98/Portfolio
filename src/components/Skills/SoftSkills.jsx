import React, { useState } from "react";
import Skill from "./Skill";


//Icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

//Soft Skills
import { PiBrainLight, PiLightbulbLight} from "react-icons/pi";
import { MdAutorenew } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";
import { TbZoomCheck } from "react-icons/tb";
import { FaSeedling } from "react-icons/fa";


function SoftSkills() {
     const [softSkillsDetails, setSoftSkillsDetails] = useState("hidden");

    function toggleDetails() {
        setSoftSkillsDetails((prev) => {
          if (prev === "hidden") {
            return "items-visible";
          } else if (prev === "items-visible") {
            setTimeout(() => {
                setSoftSkillsDetails("hidden");
            }, 300);
            return "hidding";
          } else if (prev === "hidding") {
            return;
          }
        });
      }

    return (<div id="soft-skills">
        <h4 onClick={() => toggleDetails()}>
          Soft Skills
          {softSkillsDetails === "items-visible" ? (
            <IoIosArrowUp />
          ) : (
            <IoIosArrowDown />
          )}
        </h4>
        <div
          className={softSkillsDetails}
        >
          <div id="soft-skills-container">
              <div>
                  <Skill
                    skillName="Critical Thinking"
                    skillIcon=<PiBrainLight className="skill-icon" />
                    skillDescription="I can objectively analyze information and make well-reasoned decisions"
                  />

                  <Skill
                    skillName="Problem Solving"
                    skillIcon=<PiLightbulbLight className="skill-icon" />
                    skillDescription="As a passionate problem-solver, I excel at identifying challenges and designing effective, practical solutions"
                  />

                  <Skill
                    skillName="Adaptability"
                    skillIcon=<MdAutorenew className="skill-icon" />
                    skillDescription="I'm comfortable adjusting to new tools, roles, and environments quickly and effectively"
                  />
                
                  <Skill
                    skillName="Time Management"
                    skillIcon=<TfiTimer className="skill-icon" />
                    skillDescription="I'm able to prioritize tasks and meet deadlines efficiently,
                  even in high-pressure settings"
                  />

                  <Skill
                    skillName="Attention to Detail"
                    skillIcon=<TbZoomCheck className="skill-icon" />
                    skillDescription="I'm meticulous and thorough in reviewing work to ensure
                  accuracy and consistency"
                  />

                  <Skill
                    skillName="Growth Mindset"
                    skillIcon=<FaSeedling className="skill-icon" />
                    skillDescription="I'm eager to learn, improve, and take on new challenges as
                  opportunities for development"
                  />
                </div>
                </div>
        </div>
      </div>);

}


export default SoftSkills;