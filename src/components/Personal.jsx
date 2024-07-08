import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import JL1 from "../assets/JL1.jpg";
import JL2 from "../assets/JL2.jpg";
import JL3 from "../assets/JL3.jpg";
import RL1 from "../assets/RL1.jpg";

const Personal = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    let split;

    split = new SplitText("#personal-heading", {
      type: "chars, words, lines",
    });

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#personal-heading",
        start: "top bottom += 400",
        toggleActions: "play none none none",
      },
    });

    t1.from(split.words, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    })
      .to("#JL3", {
        duration: 0.3,
        xPercent: 40,
        yPercent: 33,
        scale: 0.75,
        rotate: 6,
        ease: "power2.in",
      })
      .to("#JL2", {
        duration: 0.3,
        xPercent: -40,
        yPercent: -33,
        scale: 0.75,
        rotate: -4,
        ease: "power2.in",
      })
      .to("#RL1", {
        duration: 0.3,
        xPercent: 35,
        yPercent: -33,
        scale: 0.75,
        rotate: 3,
        ease: "power2.in",
      })
      .to("#JL1", {
        duration: 0.3,
        xPercent: -30,
        yPercent: 34,
        scale: 0.75,
        rotate: -7,
        ease: "power2.in",
      });
  }, []);

  return (
    <div
      id="personal-container"
      className="relative min-h-screen grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-red-600"
    >
      <div
        id="personal-heading-container"
        className="row-span-1 md:col-span-1 px-auto mx-4 justify-center content-center"
      >
        <p
          id="personal-heading"
          className="text-start text-gray-200 text-lg py-4 md:text-xl leading-relaxed md:leading-loose"
        >
          In my previous career, I had to travel a lot for work. I wanted
          something where I could be home more often to spend time with my
          family, which one of the driving factors in my decision to pursue a
          career in web development.
        </p>
      </div>
      <div
        id="personal-content-container"
        className="row-span-2 md:col-span-2 relative flex justify-center items-center w-full"
      >
        <img
          src={RL1}
          alt="RL1"
          id="RL1"
          className="absolute sm:scale-75 h-1/2 md:h-4/6 w-auto object-contain rounded-lg border-2 
          border-sky-400 rotate-6"
        />
        <img
          src={JL1}
          alt="JL1"
          id="JL1"
          className="absolute sm:scale-75 h-1/2 md:h-4/6 w-auto object-contain bg-left-bottom rounded-lg border-2 
          border-sky-400 -rotate-6"
        />
        <img
          src={JL2}
          alt="JL2"
          id="JL2"
          className="absolute sm:scale-75 h-1/2 md:h-4/6 w-auto object-contain rounded-lg border-2 
          border-sky-400 rotate-12"
        />
        <img
          src={JL3}
          alt="JL3"
          id="JL3"
          className="absolute sm:scale-75 h-1/2 md:h-4/6 w-auto object-contain rounded-lg border-2 
          border-sky-400"
        />
      </div>
    </div>
  );
};

export default Personal;
