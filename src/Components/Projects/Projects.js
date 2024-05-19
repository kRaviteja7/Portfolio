import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title-pro">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container-pro">
            <div className="article-container">
              <img
                src="https://cdn.dribbble.com/userupload/6674797/file/original-7a5caae684f8991a7013b591e2cb69c0.jpg?crop=122x123-2756x2099&resize=400x300&vertical=center"
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="project-title">Imdb</h2>
            <div className="btn-container">
              <a href="https://github.com/kRaviteja7/imdb">
                <button
                  className="btn btn-color-2 project-btn"
                >
                  Github
                </button>
              </a>
              <a href="https://imdb-clone-m.netlify.app/">
                <button
                  className="btn btn-color-2 project-btn"
                >
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="details-container-pro ">
            <div className="article-container">
              <img
                src="https://c1.wallpaperflare.com/preview/939/787/736/vintage-keyboard-typewriter-old.jpg"
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="project-title">Typing</h2>
            <div className="btn-container">
              <a href="https://github.com/kRaviteja7/typing-master">
                <button
                  className="btn btn-color-2 project-btn"
                >
                  Github
                </button>
              </a>
              <a href="https://typing-practice-m.netlify.app/">
                <button
                  className="btn btn-color-2 project-btn"
                >
                  Live Demo
                </button>
              </a>
            </div>
          </div>
          <div className="details-container-pro ">
            <div className="article-container">
              <img
                src="https://m.media-amazon.com/images/I/61YVYPgTDCL.jpg"
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="project-title">Todo</h2>
            <div className="btn-container">
              <a href="https://github.com/kRaviteja7/Todo-App">
                <button
                  className="btn btn-color-2 project-btn"
                >
                  Github
                </button>
              </a>
              <a href="https://todo-task-apps.netlify.app/">
                <button
                  className="btn btn-color-2 project-btn"
                >
                  Live Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
