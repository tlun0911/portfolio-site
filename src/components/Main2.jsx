import React from "react";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Story2 from "./Story2";
import Personal from "./Personal";
import Cert from "./Cert";
import Skills2 from "./Skills2";
import MealPlanner2 from "./MealPlanner2";
import WeatherApp from "./WeatherApp";
import Capstone2 from "./Capstone2";
import Budget2 from "./Budget2";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
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
      smooth: 1.5,
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      effects: true,
    });
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="w-full font-raleway relative overflow-hidden">
          <section id="landing" className="relative h-screen w-screen mb-8 ">
            <LandingPage />
          </section>

          <section id="about-me" className="relative h-dvh w-screen mb-20">
            <Story2 />
          </section>
          <section id="resume" className="relative min-h-dvh w-screen">
            <AboutMe />
          </section>
          <section id="personal" className="relative min-h-dvh w-screen">
            <Personal />
          </section>
          <section id="cert" className="relative min-h-dvh w-screen">
            <Cert />
          </section>
          <section id="skills" className="relative min-h-dvh w-screen">
            <Skills2 />
          </section>
          <section id="meal-planner" className="relative w-screen mb-24">
            <MealPlanner2 />
          </section>
          <section id="weather-app" className="relative w-screen mb-24">
            <WeatherApp />
          </section>
          <section id="capstone" className="relative w-screen mb-24">
            <Capstone2 />
          </section>
          <section id="budget" className="relative w-screen mb-24">
            <Budget2 />
          </section>
          <section id="contact" className="relative min-h-dvh w-screen">
            <ContactForm />
          </section>
          <section id="footer" className="relative w-screen">
            <Footer />
          </section>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Main2;
