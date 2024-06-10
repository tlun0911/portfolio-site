import React, { useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Story from "./Story";
import Background2 from "./Background2";
import Skills from "./Skills";
import Projects from "./Projects";

const Main = () => {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <Background2 />
      <Story />
      <Skills />
      <Projects />
    </div>
  );
};

export default Main;
