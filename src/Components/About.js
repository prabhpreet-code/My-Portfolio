import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            A Software Engineer specializing in <b>Product Development</b> with
            a proven track record in software architecture, implementation, and
            optimization.
            <br />
            <br />
            My journey isn't just about code; it's an art of sculpting solutions
            that dance between technical brilliance and seamless integration
            with overarching business objectives. I thrive on creating
            innovative, efficient, and scalable systems, always keeping the
            balance between technical finesse and strategic vision.
            <br />
            <br />
            Coding the future, one line at a time, to craft not just software,
            but transformative <b>user-centric experiences</b>.
            <br />
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Docker" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Python" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />,
        <Skills skill="NestJS" />,
        <Skills skill="Golang" />,
        <Skills skill="AWS" />,
        <Skills skill="Azure" />,
        <Skills skill="NextJS" />,
        <Skills skill="MaterialUI" />,
        <Skills skill="Redis" />,
        <Skills skill="Postgres" />,
        <Skills skill="Redux" />,
        <Skills skill="Jest" />,
        <Skills skill="Java" />,
        <Skills skill="Typescript" />,
      </div>
    </>
  );
};

export default About;
