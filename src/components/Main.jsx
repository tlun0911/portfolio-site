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
      <section
        id="skills"
        className="md:w-1/2 mx-auto md:mt-32 pt-20 md:pt-40 font-landing relative flex-col justify-center items-center"
      >
        <h1 className="text-4xl text-white font-bold text-center">Skills</h1>
        <p className="text-center text-white my-5 mx-3 md:pb-4 text-lg">
          I have experience with several front and back-end technologies. Here
          are a few of the frameworks and languages that I have worked with:
          <br />
        </p>
        <div className="container mx-auto flex justify-center items-center">
          <div className="grid grid-cols-3 gap-5 gap-x-5 md:grid-cols-4 flex justify-center items-center">
            <Skills />
          </div>
        </div>
      </section>
      <Projects />
    </div>
  );
};

export default Main;
