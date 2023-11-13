import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";
import Skill from "./Skill";

function ExperienceCardJob({
  designation,
  companyName,
  date,
  skillsArray,
  type,
}) {
  if (type === "left") {
    return (
      <div className="experienceCardJob">
        <div className="experienceCardJobSide1">
          <BsFillTriangleFill color="white" />
        </div>
        <div className="experienceCardDesignation">{designation}</div>
        <div className="experienceCardCompany">{companyName}</div>
        <div className="experienceCardTimeline">{date}</div>
        <div className="experienceCardSkills">
          {skillsArray.map((i) => {
            return <Skill element={i} />;
          })}
        </div>
      </div>
    );
  } else if (type === "right") {
    return (
      <div className="experienceCardJob">
        <div className="experienceCardJobSide2">
          <BsFillTriangleFill color="white" />
        </div>
        <div className="experienceCardDesignation">{designation}</div>
        <div className="experienceCardCompany">{companyName}</div>
        <div className="experienceCardTimeline">{date}</div>
        <div className="experienceCardSkills">
          {skillsArray.map((i) => {
            return <Skill element={i} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div className="experienceCardJobEmpty"></div>;
  }
}

export default ExperienceCardJob;
