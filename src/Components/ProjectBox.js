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
    OWLGithub: "https://github.com/prabhpreet-code/OWL",

    STORE_LOCATORDesc:
      " I developed a Store Locator application that empowers users to efficiently search for and pinpoint nearby stores. This application was crafted using a stack comprising Node.js, JavaScript, Google Maps API, MongoDB, and the Google Maps Geocoder API.",
    STORE_LOCATORGithub:
      "https://github.com/prabhpreet-code/Google-Maps-store-locator",

    ADEaseDesc:
      "Craft, Manage, and Target Ads effortlessly! Our platform personalizes advertisements to match user demographics, offering a diverse showcase on the homepage. Utilizing reverse geo-coding, we tailor ads for maximum impact. Register and access your dedicated dashboard for seamless ad creation and management",
    ADEaseGithub:
      "https://github.com/prabhpreet-code/Business-ad-Creation-and-Management",
    RAPID_RESOLVEDesc:
      "Efficient Support ticket handling made simple! Our system uses round-robin assignment and dynamic agent allocation to streamline ticket resolution, ensuring smooth operations and optimal agent availability",
    RAPID_RESOLVEGithub:
      "https://github.com/prabhpreet-code/Support-Ticket-Management-System",
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
