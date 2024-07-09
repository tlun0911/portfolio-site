import React, { useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Story from "./Story";
import Story2 from "./Story2";
import Personal from "./Personal";
import Cert from "./Cert";
import Skills2 from "./Skills2";
import Skills from "./Skills";
import MealPlanner from "./MealPlanner";
import Capstone from "./Capstone";
import Budget from "./Budget";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-toastify/dist/ReactToastify.css";

const Main2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    ScrollSmoother.create({
      smooth: 3,
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
        <div className="bg-zinc-900 min-h-screen w-full font-raleway">
          <section id="landing" className="relative overflow-hidden">
            <LandingPage />
          </section>

          <section
            id="about-me"
            className="relative min-h-screen w-screen mb-20"
          >
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
        </div>
      </div>
    </div>
  );
};

export default Main2;
