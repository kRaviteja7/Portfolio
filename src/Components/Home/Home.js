import React, { useState } from "react";
import "./home.css";
import photo from "./pic1.jpeg";
import linkedin from "./linkedin.png";
import github from "./github.png";
import { AiOutlineMenu } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";


const Home = ({ sections, activeSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="App">
      <nav className="nav">
        <div>
          <a href="#/" className="title">
            Raviteja
          </a>
        </div>
        <div>
          <div className="nav-links">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={section.id === activeSection ? "active" : ""}
              >
                {section.title}
              </a>
            ))}
          </div>
          <AiOutlineMenu className="side-icon" onClick={()=>setIsSidebarOpen(!isSidebarOpen)}/>
        </div>
      </nav>
      <nav className="sidebar-res" style={{ display: isSidebarOpen? 'block' : 'none' ,position:'fixed'}}>
        <div className="nav-links-res">
          <BsXLg className="cancle" onClick={()=>setIsSidebarOpen(!isSidebarOpen)}/>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              style={{textAlign:'center'}}
              onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
             >
              {section.title}
            </a>
          ))}
        </div>
      </nav>
      <section id="/" className="profile">
        <div class="section__pic-container">
          <img className="im" src={photo} alt="" />
        </div>
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="sec_title">Raviteja</h1>
          <p class="section__text__p2">FullStack Developer</p>
          <div class="btn-container">
            <a href="https://drive.google.com/file/d/1nTyCCWwL3reUShH5xtr2aNanmezDPFWD/view?usp=sharing">
              <button
                class="btn btn-color-2"
                onclick="window.open('./assets/resume-example.pdf')"
              >
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button class="btn btn-color-1">Contact Info</button>
            </a>
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/raviteja-kamineni-874451193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="My LinkedIn profile" class="icon" />
            </a>
            <a href="https://github.com/kRaviteja7">
              <img src={github} alt="My Github profile" class="icon" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
