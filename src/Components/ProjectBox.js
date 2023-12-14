import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    POWERBOARDDesc:
      "Snapshotter Node powered dashboard that gives critical and accurate analysis and representation of all the data fetched by the node. The running node can also grab data from user entered contracts.",
    POWERBOARDGithub:
      "https://ethglobal.com/showcase/powerboard-the-ultimate-snapshotter-experience-zzmys",
    WORKROLLDesc:
      "Pioneering a transformation in the freelance landscape, this project stands as the ultimate tool for upcoming freelancers. Its innovative approach not only revolutionizes freelance dynamics but also earned it multiple bounties at EthIndia 2023.",
    WORKROLLGithub: "https://ethglobal.com/showcase/workroll-u5jzj",
    OWLDesc:
      "A dApp for video game distribution employing NFT licensing. This led to securing the highest position out of 12,000 participants in the esteemed TezAsia 2k23 hackathon",
    OWLGithub:
      "https://github.com/SurkhabSingh/TezAsia-2k23/tree/main/Coding%20Homies",

    MAPSDesc:
      " I developed a Store Locator application that empowers users to efficiently search for and pinpoint nearby stores. This application was crafted using a stack comprising Node.js, JavaScript, Google Maps API, MongoDB, and the Google Maps Geocoder API.",
    MAPSGithub: "https://github.com/prabhpreet-code/Google-Maps-store-locator",

    SATYUGDesc:
      "a user-friendly DApp and Game centered on spirituality, religion, meditation, and yoga.",
    SATYUGGithub: "https://satyug.life/",
    JIMDesc:
      "This site is like a treasure map for workouts. You can pick and choose exercises by categories, like a customized playlist. It's got YouTube videos and references for each exercise, making it super easy to find what you need.",
    JIMGithub: "https://github.com/prabhpreet-code/JIM",
    WHATSCHATDesc:
      "An online space where conversations come alive. Connect, share, and engage in real-time discussions with people worldwide. Whether it's a quick catch-up or a deep dive into topics, this platform brings people together through the power of conversation",
    WHATSCHATGithub: "https://github.com/prabhpreet-code/Whatsapp-clone",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            Visit Project <BsArrowUpRightCircleFill />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
