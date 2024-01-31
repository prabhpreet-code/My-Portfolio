import React from "react";
import ProjectBox from "./ProjectBox";
import supportImage from "../images/Support.png";
import mapImage from "../images/map.png";
import owlImage from "../images/owl.png";
import adImage from "../images/AD.jpg";
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
        <ProjectBox projectPhoto={adImage} projectName="ADEase" />
        <ProjectBox projectPhoto={owlImage} projectName="OWL" />
        <ProjectBox projectPhoto={supportImage} projectName="RAPID_RESOLVE" />
        <ProjectBox projectPhoto={workRoll} projectName="WORKROLL" />
        <ProjectBox projectPhoto={powerBoard} projectName="POWERBOARD" />

        <ProjectBox projectPhoto={mapImage} projectName="STORE_LOCATOR" />

        <ProjectBox projectPhoto={whatsappImage} projectName="WHATSCHAT" />
      </div>
    </div>
  );
};

export default Projects;
