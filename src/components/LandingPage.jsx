import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { SplitText } from "gsap/SplitText";

const LandingPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    let split;
    let split2;
    let animation = gsap.timeline({});
    gsap.set("#wrapper", { autoAlpha: 1 });

    split = new SplitText("#heading1", {
      type: "chars",
    });

    split2 = new SplitText("#heading2", {
      type: "chars",
    });

    animation.from(split.chars, {
      opacity: 0,
      y: 100,
      ease: "back(4)",
      stagger: {
        from: "center", //try "center" and "edges"
        each: 0.05,
      },
    });
    animation.from(split2.chars, {
      duration: 1.5,
      opacity: 0,
      y: -100,
      ease: 'bounce.out',
      stagger: 0.1,
    });
    animation.from("#button", {
      opacity: 0,
      scale: 0, // Start from a scaled down size
      y: 40, // Original vertical position adjustment
      ease: "power3.out",
      duration: 1.5, // Adjust duration as needed for the desired effect
    });

  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen z-0">
      <div id="wrapper">
        <h1
          id="heading1"
          className="text-red-600 font-bold 
        leading-relaxed text-4xl md:text-6xl
         md:tracking-widest text-center
         mb-12"
        >
          Thomas Lunt
        </h1>
        <h1
          id="heading2"
          className="leading-relaxed text-gray-300 text-3xl md:text-5xl md:tracking-widest text-center"
        >
          Full Stack Developer
        </h1>
      </div>
      <div className="block justify-center font-display" id="button">
        <a
          href="#story"
          type="button"
          className="inline-block bg-black px-6 
              py-3 text-xl leading-relaxed
              bg-opacity-50
              font-bold border-4 border-red-600 rounded 
              text-red-600 hover:ring-4 hover:ring-gray-300 
              hover:bg-opacity-20 hover:text-gray-300 transition 
              duration-300 ease-in-out mt-10"
        >
          Check Out My Story
        </a>
        <div className="flex justify-center z-10" id="icon">
          <a type="button" href="#story">
            <FaCircleArrowDown
              className="justify-center text-red-600
               text-4xl hover:animation-pulse-ring
               animate-bounce mt-10"              
            />
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
