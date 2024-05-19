import React from "react";
import "./experience.css";
import check from "./checkmark.png";

const Experience = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title-ex">Experience</h1>
      <div className="experience-details-container">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container-ex">
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>TypeScript</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>JavaScript</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>React.Js</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>Tailwind</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div className="details-container-2">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container-ex">
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>Node JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>Express JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src={check} alt="Experience icon" className="icon" />
              <div>
                <h3>MongoDB</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
