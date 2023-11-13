import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Prabhpreet Singh</h4>
      <div className="footerLinks">
        <a href="https://github.com/prabhpreet-code" target="_blank">
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/prabhpreet-singh-387395191/"
          target="_blank"
        >
          <FaLinkedin size={25} />
        </a>
        <a href="mailTo:prabhpreetsingh.singh0203@gmail.com" target="_blank">
          <GrMail size={25} />
        </a>
        <a href="https://twitter.com/_PrabhpreetSing" target="_blank">
          <FaSquareXTwitter size={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
