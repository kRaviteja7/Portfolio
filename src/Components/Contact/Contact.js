import React from "react";
import "./contact.css";
import email from './email.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title-contact">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="contact-icon"
          />
          <p className="contact-p">
            <a href="mailto:kamineniravitea7@gmail.com">Example@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <FaLinkedin className="con-icon"/>
          <p className="contact-p">
            <a href="https://www.linkedin.com/in/raviteja-kamineni-874451193/">LinkedIn</a>
          </p>
        </div>
        <div className="contact-info-container">
          <AiFillTwitterCircle className="con-icon"/>
          <p className="contact-p">
            <a href="https://twitter.com/Ravitej11210940">Twitter</a>
          </p>
        </div>
        <div className="contact-info-container">
          <FaGithub className="con-icon"/>
          <p className="contact-p">
            <a href="https://github.com/kRaviteja7">GitHub</a>
          </p>
        </div>
      </div>
      <footer className="foot">
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </section>
  );
};

export default Contact;
