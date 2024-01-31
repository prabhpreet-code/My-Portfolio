import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiNestjs,
  SiMui,
  SiRedis,
  SiPostgresql,
  SiRedux,
  SiJest,
  SiTypescript,
} from "react-icons/si";
import { BiLogoTailwindCss, BiLogoAws, BiLogoJava } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    "C++": <CgCPlusPlus />,
    Python: <FaPython />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Docker: <FaDocker />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <BiLogoTailwindCss />,
    NestJS: <SiNestjs />,
    Golang: <FaGolang />,
    AWS: <BiLogoAws />,
    Azure: <SiMicrosoftazure />,
    NextJS: <TbBrandNextjs />,
    MaterialUI: <SiMui />,
    Redis: <SiRedis />,
    Postgres: <SiPostgresql />,
    Redux: <SiRedux />,
    Jest: <SiJest />,
    Java: <BiLogoJava />,
    Typescript: <SiTypescript />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
