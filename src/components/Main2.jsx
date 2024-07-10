import React, { useEffect } from "react";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Story2 from "./Story2";
import Personal from "./Personal";
import Cert from "./Cert";
import Skills2 from "./Skills2";
import MealPlanner2 from "./MealPlanner2";
import Capstone2 from "./Capstone2";
import Budget2 from "./Budget2";
import ContactForm from "./ContactForm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Main2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    ScrollSmoother.create({
      smooth: 1,
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      effects: true,
      smoothTouch: 0.1,
    });
    // ScrollTrigger.create({
    //   trigger: "#about-me",
    //   start: "top top",
    //   end: "bottom 400px",
    //   pin: "#about-me",
    //   anticipatePin: 1,
    // });
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="w-full font-raleway">
          <section
            id="landing"
            className="relative min-h-screen w-screen overflow-hidden"
          >
            <LandingPage />
          </section>

          <section id="about-me" className="relative h-96 w-screen mb-20">
            <Story2 />
          </section>
          <section id="resume" className="relative min-h-screen w-screen">
            <AboutMe />
          </section>
          <section id="personal" className="relative min-h-screen w-screen">
            <Personal />
          </section>
          <section id="cert" className="relative min-h-screen w-screen">
            <Cert />
          </section>
          <section id="skills" className="relative min-h-screen w-screen">
            <Skills2 />
          </section>
          <section id="meal-planner" className="relative w-screen mb-24">
            <MealPlanner2 />
          </section>
          <section id="capstone" className="relative w-screen mb-24">
            <Capstone2 />
          </section>
          <section id="budget" className="relative w-screen mb-24">
            <Budget2 />
          </section>
          <section id="contact" className="relative min-h-screen w-screen">
            <ContactForm />
          </section>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Main2;
