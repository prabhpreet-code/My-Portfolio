import React from "react";
import ProjectBox from "./ProjectBox";
import jimImage from "../images/jim.png";
import mapImage from "../images/map.png";
import owlImage from "../images/owl.png";
import satyugImage from "../images/satyug.png";
import whatsappImage from "../images/whatsapp.png";
import powerBoard from "../images/powerboard.png";
import workRoll from "../images/workroll.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={workRoll} projectName="WORKROLL" />
        <ProjectBox projectPhoto={powerBoard} projectName="POWERBOARD" />
        <ProjectBox projectPhoto={owlImage} projectName="OWL" />
        <ProjectBox projectPhoto={jimImage} projectName="JIM" />
        <ProjectBox projectPhoto={mapImage} projectName="MAPS" />
        <ProjectBox projectPhoto={satyugImage} projectName="SATYUG" />
        <ProjectBox projectPhoto={whatsappImage} projectName="WHATSCHAT" />
      </div>
    </div>
  );
};

export default Projects;
