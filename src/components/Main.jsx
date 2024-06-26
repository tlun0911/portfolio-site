import React, { useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Story from "./Story";
import Background2 from "./Background2";
import Skills from "./Skills";
import MealPlanner from "./MealPlanner";
import Capstone from "./Capstone";
import Budget from "./Budget";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        className="flex box-border sticky content-center bg-opacity-80 bg-gray-700 min-w-screen text-gray-200 md:text-2xl py-3 z-50"
      >
        <Navbar />
      </div>
      <div id="content-bg" className="min-w-full box-border">
        <Background2 />
      </div>
      <section
        id="story"
        className="py-8 md:py-16 md:w-2/3 mx-auto font-landing relative"
      >
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
        className="relative mt-15 pt-20 flex-col items-center justify-center"
      >
        <h1 className="mb-4 text-gray-200 text-center text-4xl">Projects</h1>
        <MealPlanner />
        <Capstone />
        <Budget />
      </section>
      <section
        id="contact"
        className="relative flex-col mt-15 md:p-20 items-center justify-center"
      >
        <ContactForm />
      </section>
      <section
        id="end"
        className="relative flex-col pt-20 place-content-center"
      >
        <Footer />
      </section>
      <ToastContainer />
    </div>
  );
};

export default Main;
