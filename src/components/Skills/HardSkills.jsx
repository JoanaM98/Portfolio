import React, { useState } from "react";

//Icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import HtmlIcon from "../../assets/icons/html.png";
import CssIcon from "../../assets/icons/css.png";
import BootstrapIcon from "../../assets/icons/bootstrap.png";
import JsIcon from "../../assets/icons/js.png";
import ReactIcon from "../../assets/icons/react.png";
import NodeIcon from "../../assets/icons/node.png";
import ExpressIcon from "../../assets/icons/express-js.png";
import SqlIcon from "../../assets/icons/SQL.png";
import PostgresIcon from "../../assets/icons/postgres.webp";
import PythonIcon from "../../assets/icons/python.png";
import ApiIcon from "../../assets/icons/api.png";
import GitIcon from "../../assets/icons/git.png";
import GithubIcon from "../../assets/icons/github.png";
import ExcelIcon from "../../assets/icons/excel.png";

function HardSkills() {
  const [hardSkillsDetails, setHardSkillsDetails] = useState("hidden");

  function toggleDetails() {
    setHardSkillsDetails((prev) => {
      if (prev === "hidden") {
        return "items-visible";
      } else if (prev === "items-visible") {
        setTimeout(() => {
          setHardSkillsDetails("hidden");
        }, 300);
        return "hidding";
      } else if (prev === "hidding") {
        return;
      }
    });
  }

  return (
    <div id="hard-skills">
      <h4 onClick={() => toggleDetails()}>
        Hard Skills
        {hardSkillsDetails === "items-visible" ? (
          <IoIosArrowUp />
        ) : (
          <IoIosArrowDown />
        )}
      </h4>
      <div
        className={hardSkillsDetails}
      >
        <div id="hard-skills-container">
          {/* Frontend + Tools */}
          <div>
            <img src={HtmlIcon} alt="html-icon" />
            <img src={CssIcon} alt="css-icon" />
            <img src={BootstrapIcon} alt="bootstrap-icon" />
            <img src={JsIcon} alt="js-icon" />
            <img src={ReactIcon} alt="react-icon" />
            <img src={ApiIcon} alt="api-icon" />
            <img src={ExcelIcon} alt="excel-icon" />

            {/* Backend + Version Control + Databases */}

            <img src={GitIcon} alt="git-icon" />
            <img src={GithubIcon} alt="github-icon" />
            <img src={NodeIcon} alt="node-icon" />
            <img src={ExpressIcon} alt="express-icon" />
            <img src={SqlIcon} alt="sql-icon" />
            <img src={PostgresIcon} alt="postgres-icon" />
            <img src={PythonIcon} alt="python-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HardSkills;
