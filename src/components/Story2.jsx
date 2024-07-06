import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

const Story2 = () => {
  const headingText = ["Father", "Husband", "Sports Fanatic"];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(TextPlugin);
    let split3;

    split3 = new SplitText("#aboutMeHeading", {
      type: "chars",
      transformOrigin: "center center -100px",
      // Comment this out to see the backs of letters
      backfaceVisibility: "hidden",
    });

    function intro() {
      let t1 = gsap.timeline({});
      t1.from("#about_me_divider", {
        x: "-100%", // Start from off-screen left
        duration: 1, // Duration of the animation in seconds
        ease: "power2.inOut", // Easing function
      });
      return t1;
    }

    function middle() {
      let t1 = gsap.timeline({});
      t1.from(split3.chars, {
        duration: 0.7,
        rotationY: 360,
        transformPerspective: 800,
        transformOrigin: "50% 50%",
        opacity: 0,
        ease: "power3.inOut",
        stagger: 0.02,
      });
      return t1;
    }

    function end() {
      let t1 = gsap.timeline({});
      headingText.forEach((text, index) => {
        t1.to("#about_span", {
          duration: 0.75,
          text: {
            value: text,
          },
          repeat: 1,
          yoyo: true,
        });
      });

      return t1;
    }

    function ending() {
      let t1 = gsap.timeline({});
      t1.to("#about_span", {
        duration: 1.3,
        text: {
          value: "Full Stack Developer.",
        },
      });
      return t1;
    }

    function heading() {
      let t1 = gsap.timeline({});
      t1.from("#welcome_heading", {
        duration: 0.2,
        opacity: 0,
        x: -200,
        ease: "power1.in",
      });
      return t1;
    }

    function endHeader() {
      let t1 = gsap.timeline({});
      t1.from("#end_about_me_divider", {
        x: "100%", // Start from off-screen left
        duration: 0.5, // Duration of the animation in seconds
        ease: "power1.in", // Easing function
      });
      return t1;
    }

    let master = gsap.timeline({
      scrollTrigger: {
        trigger: "#about_me_divider",
        start: "top bottom", // Animation starts when the top of the divider hits the bottom of the viewport
        toggleActions: "play none none none", // Defines how the animation behaves on scroll into and out of view
      },
    });

    master
      .add(intro())
      .add(middle(), "+=0.25")
      .add(end(), "+=0.25")
      .add(ending())
      .add(heading(), "+=0.25")
      .add(endHeader(), "<");
  }, []);

  return (
    <div id="about-me-container" className="relative flex flex-col md:min-h-screen">
      <div id="about_me_divider" className="bg-red-600 w-4/5 h-1.5 mt-8 md:mt-24"></div>
      <div className="min-h-full relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 min-h-full">
          <h1
            className="text-3xl md:text-5xl text-gray-200 text-start mt-12 md:mt-24"
            id="aboutMeHeading"
          >
            Hi, I'm Tom. I'm a{" "}
          </h1>{" "}
          <h1
            id="about_span"
            className="text-center text-3xl md:text-5xl text-gray-200 mt-12"
          ></h1>
          <h1
            id="welcome_heading"
            className="text-3xl md:text-5xl text-gray-200 text-start mt-12"
          >
            Welcome to my site
          </h1>
        </div>
      </div>
      <div dir="rtl">
      <div
        id="end_about_me_divider"
        className=" bg-red-600 w-4/5 h-1.5 mt-12 md:mt-24 mb-12 md:mb-24"
      ></div>
      </div>
    </div>
  );
};

export default Story2;
