import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import MealPlanImg1 from "../assets/Meal_planner/Meal_planner_landing.png";

const MealPlanner2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(DrawSVGPlugin);

  useGSAP(() => {
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects-container",
        start: "top bottom", // Animation starts when the top of the divider hits the bottom of the viewport
        toggleActions: "play none none none", // Defines how the animation behaves on scroll into and out of view
      },
    });

    let split;
    split = new SplitText("#project-heading", {
      type: "chars, words",
    });

    t1.from(split.chars, {
      delay: 0.25,
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    });
  }),
    [];

  return (
    <div
      id="projects-container"
      className="relative flex flex-col justify-center items-center mt-14 mx-auto h-full w-screen"
    >
      <h1
        id="project-heading"
        className="text-5xl mb-28 font-bold text-center text-gray-900"
      >
        Projects
      </h1>
      <div className="bg-slate-700 bg-opacity-60 md:w-1/2 h-96">
        <img
          src={MealPlanImg1}
          className="w-11/12 md:w-auto h-auto md:h-3/4 -translate-y-1/4 md:-translate-x-1/4
          hover:scale-125 duration-300 ease-in-out"
          alt="Meal Planner"
        />
        <div
          className="bg-sky-800 w-4/5 h-auto
         text-gray-200 md:-translate-y-16
         md:translate-x-1/2 p-4 mb-12"
        >
          The Meal Planner is a live full stack application for saving recipes
          and creating weekly meal plans. The backend API was build with
          NodeJS/Express and MongoDB was used for the database. The frontend was
          built with React and uses Redux for state management. Please note that
          the app is hosted on a free Render server and may take a few seconds
          to load!
        </div>
      </div>
      <div className="mt-16 md:mt-12">
        <a
          href="https://meal-planner-692u.onrender.com/"
          target="_blank"
          className="text-gray-900 underline mb-1 font-bold text-center md:text-start hover:text-red-600"
        >
          Check out the live app here
        </a>
      </div>
    </div>
  );
};

export default MealPlanner2;
