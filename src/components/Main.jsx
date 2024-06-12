import React, { useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Story from "./Story";
import Background2 from "./Background2";
import SkillsMdLg from "./SkillsMdLg";
import Projects from "./Projects";
import SkillsSm from "./SkillsSm";

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
      <section id="skills" className="font-landing relative">
        <h2 className="text-white text-3xl text-center mb-8">My Skills</h2>
        <div className="container w-3/5 mx-auto text-center">
          <div className="grid grid-cols-3 grid-rows-9 gap-5 justify-items-center md:hidden">
            <SkillsSm />
          </div>
          <div className="hidden md:grid grid-cols-5 grid-rows-6 gap-5 justify-items-center">
            <SkillsMdLg />
          </div>
        </div>
      </section>
      <Projects />
    </div>
  );
};

export default Main;
