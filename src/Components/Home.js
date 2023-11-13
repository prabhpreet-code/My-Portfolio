import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Yo!</h1>
          <h1>
            I'M <b>PRABHPREET SINGH</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            A <b>Software Engineer</b> specializing in{" "}
            <b>Product Development</b> with a proven track record in software
            architecture, implementation, and optimization.
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
            Also, I love <b>Tea</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
