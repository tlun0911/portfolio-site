import React, { useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Story from "./Story";
import Background2 from "./Background2";
import Skills from "./Skills";
import MealPlanner from "./MealPlanner";
import Capstone from "./Capstone";
import Budget from "./Budget";

const Main = () => {
  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
  }, []);

  return (
    <div className="App">
      <section
        id="landing"
        className="flex max-h-screen bg-black min-w-screen box-border"
      >
        <LandingPage />
      </section>
      <div
        id="navbar"
        className="flex box-border sticky content-center bg-gray-800 min-w-screen text-white md:text-2xl py-4 z-50"
      >
        <Navbar />
      </div>
      <div id="content-bg" className="min-w-full box-border">
      <Background2 />
      </div>
      <section id="story" className="py-8 md:py-16 font-landing relative">
        <Story />
      </section>
      <section
        id="skills"
        className="md:w-1/2 mx-auto mt-15 pt-20 font-landing relative flex-col justify-center items-center"
      >
        <Skills />
      </section>
      <section
        id="projects"
        className="relative mt-15 pt-20 flex-col mx-auto items-center justify-center"
      >
        <h1 className="mb-4 text-white text-center text-4xl">Projects</h1>
        <MealPlanner />
        <Capstone />
        <Budget />
      </section>
    </div>
  );
};

export default Main;
