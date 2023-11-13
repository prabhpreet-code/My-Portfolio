import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="AboutPage">
      <div className="experienceText">
        <h1 className="AboutTextHeading">
          Know My <b>Experience</b>!
        </h1>

        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
