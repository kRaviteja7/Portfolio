import React from "react";
import "./about.css";
import pic from "../Home/pic2.jpeg";
import { GiRibbonMedal } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";

const About = () => {
  return (
    <section id="about" className="about">
      <p className="know">Get know More</p>
      <h1 className="me">About Me</h1>
      <div className="content">
        <div className="pic">
          <img className="img" src={pic} alt="" />
        </div>
        <div className="data">
          <div className="education">
            <div className="edc_data">
              <GiRibbonMedal className="ex-icon"/>
              <h1>Experience</h1>
              <p>FullStack Developer</p>
            </div>
            <div className="edc_data">
              <PiStudentFill className="edu-icon"/>
              <h1>Education</h1>
              <p>B.tech Mechanical</p>
            </div>
          </div>
          <div className="paragraph">
            <p>
              Highly motivated and self-taught individual with a strong
              foundation in web development technologies. Proficient in Node.js,
              JavaScript, Typescript, React, CSS, HTML, Express, and MongoDB. A quick
              learner who is passionate about creating intuitive and
              user friendly web applications. Excited about leveraging technical
              skills to contribute to innovative projects and eager to embrace
              new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
