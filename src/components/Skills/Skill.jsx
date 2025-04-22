import React from "react";

function Skill(props) {
  return (
    <div className="skill">
      <p className="skill-title"> {props.skillIcon} {props.skillName} </p>
     {props.skillDescription&&<p className="skill-description">{props.skillDescription}</p>} 
    </div>
  );
}

export default Skill;
