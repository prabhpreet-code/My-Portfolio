import React, { useEffect, useState } from "react";
import ExperienceCardJob from "./ExperienceCardJob";

const ExperienceCard = () => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth < 800) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);
  if (isDesktop) {
    return (
      <div className="experienceBox1Expanded">
        <ExperienceCardJob
          designation="Full Stack Developer Intern"
          companyName="Truffles"
          date="Jul 2023- present"
          skillsArray={[
            "Typescript",
            "Javascript",
            "NestJS",
            "Golang",
            "MongoDB",
            "NextJS",
            "TailwindCSS",
            "MUI",
            "React Query",
            "EthersJS",
            "Jest",
            "System Desiging",
            "Web3JS",
          ]}
          type="left"
        />
        <ExperienceCardJob
          designation="Backend Developer Intern"
          companyName="Tactics"
          date="Mar 2023- Sept 2023"
          skillsArray={[
            "Typescript",
            "Javascript",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "AWS",
            "System Desiging",
            "Microservices",
            "Redis Caching",
            "PostgresSQL",
            "ZeroMQ",
            "Puppeteer",
            "Sockets",
            "ReactJS",
            "TailwindCSS",
            "MUI",
          ]}
          type="left"
        />
        <ExperienceCardJob
          designation="Full Stack Developer Intern"
          companyName="Metaverse Ventures Private Limited"
          date="Apr 2023- Jul 2023"
          skillsArray={[
            "Typescript",
            "Javascript",
            "NextJS",
            "NestJS",
            "TailwindCSS",
            "MUI",
            "ReduxJS",
            "EthersJS",
            "RTK Queries",
            "Redux Thunk",
          ]}
          type="left"
        />
        <ExperienceCardJob
          designation="Full Stack Developer Intern"
          companyName="Satyug Labs"
          date="Dec 2022- Feb 2023"
          skillsArray={[
            "Javascript",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "System Desiging",
            "ReactJS",
            "NextJS",
            "TailwindCSS",
            "MUI",
            "EthersJS",
            "Solidity",
          ]}
          type="left"
        />
        <ExperienceCardJob
          designation="Metaverse Developer Intern"
          companyName="Quantlabs Pvt Ltd"
          date="Sep 2022- Dec 2022"
          skillsArray={["Unity", "Moralis SDK", "Solidity", "Hardhat", "C#"]}
          type="left"
        />
        <ExperienceCardJob
          designation="Web Developer"
          companyName="Boston Consulting Group"
          date="Aug 2022- Oct 2022"
          skillsArray={[
            "HTML",
            "CSS",
            "Javascript",
            "NodeJS",
            "ReactJS",
            "TailwindCSS",
          ]}
          type="left"
        />
      </div>
    );
  } else {
    return (
      <div className="experienceCard">
        <div className="experienceBox1">
          <ExperienceCardJob
            designation="Full Stack Developer Intern"
            companyName="Truffles"
            date="Jul 2023- present"
            skillsArray={[
              "Typescript",
              "Javascript",
              "NestJS",
              "Golang",
              "MongoDB",
              "NextJS",
              "TailwindCSS",
              "MUI",
              "React Query",
              "EthersJS",
              "Jest",
              "System Desiging",
              "Web3JS",
            ]}
            type="left"
          />

          <ExperienceCardJob
            designation=""
            companyName=""
            date=""
            skillsArray={[]}
            type="empty"
          />
          <ExperienceCardJob
            designation="Full Stack Developer Intern"
            companyName="Metaverse Ventures Private Limited"
            date="Apr 2023- Jul 2023"
            skillsArray={[
              "Typescript",
              "Javascript",
              "NextJS",
              "NestJS",
              "TailwindCSS",
              "MUI",
              "ReduxJS",
              "EthersJS",
              "RTK Queries",
              "Redux Thunk",
            ]}
            type="left"
          />
          <ExperienceCardJob
            designation=""
            companyName=""
            date=""
            skillsArray={[]}
            type="empty"
          />
          <ExperienceCardJob
            designation="Metaverse Developer Intern"
            companyName="Quantlabs Pvt Ltd"
            date="Sep 2022- Dec 2022"
            skillsArray={["Unity", "Moralis SDK", "Solidity", "Hardhat", "C#"]}
            type="left"
          />
        </div>

        <div className="experienceBox2">
          <ExperienceCardJob
            designation=""
            companyName=""
            date=""
            skillsArray={[]}
            type="empty"
          />
          <ExperienceCardJob
            designation="Backend Developer Intern"
            companyName="Tactics"
            date="Mar 2023- Sept 2023"
            skillsArray={[
              "Typescript",
              "Javascript",
              "NodeJS",
              "ExpressJS",
              "MongoDB",
              "AWS",
              "System Desiging",
              "Microservices",
              "Redis Caching",
              "PostgresSQL",
              "ZeroMQ",
              "Puppeteer",
              "Sockets",
              "ReactJS",
              "TailwindCSS",
              "MUI",
            ]}
            type="right"
          />
          <ExperienceCardJob
            designation=""
            companyName=""
            date=""
            skillsArray={[]}
            type="empty"
          />
          <ExperienceCardJob
            designation="Full Stack Developer Intern"
            companyName="Satyug Labs"
            date="Dec 2022- Feb 2023"
            skillsArray={[
              "Javascript",
              "NodeJS",
              "ExpressJS",
              "MongoDB",
              "System Desiging",
              "ReactJS",
              "NextJS",
              "TailwindCSS",
              "MUI",
              "EthersJS",
              "Solidity",
            ]}
            type="right"
          />
          <ExperienceCardJob
            designation=""
            companyName=""
            date=""
            skillsArray={[]}
            type="empty"
          />
          <ExperienceCardJob
            designation="Web Developer"
            companyName="Boston Consulting Group"
            date="Aug 2022- Oct 2022"
            skillsArray={[
              "HTML",
              "CSS",
              "Javascript",
              "NodeJS",
              "ReactJS",
              "TailwindCSS",
            ]}
            type="right"
          />
        </div>
      </div>
    );
  }
};

export default ExperienceCard;

// F5F5DC
// #c940
