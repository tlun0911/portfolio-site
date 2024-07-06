import { useEffect } from "react";
import cert from "../assets/cert.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

const AboutMe = () => {
  useGSAP(() => {
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MorphSVGPlugin);

    let master = gsap.timeline({
      scrollTrigger: {
        trigger: "#para1",
        start: "top bottom", // Animation starts when the top of the divider hits the bottom of the viewport
        toggleActions: "play none none none", // Defines how the animation behaves on scroll into and out of view
      },
    });
    let split;
    let split2;
    let t1 = gsap.timeline({});
    let t2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    let t3 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    split = new SplitText("#para1", {
      type: "chars, words",
    });

    split2 = new SplitText("#para2", {
      type: "chars, words",
    });

    gsap.set("#para1", { perspective: 400 });
    gsap.set("#para2", { perspective: 400 });

    t1.from(split.chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
    })
      .from(
        "#svg1",
        {
          duration: 0.8,
          opacity: 0,
          scale: 0,
          ease: "power1.in",
        },
        "<"
      )
      .from(split2.chars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
      })
      .from(
        "#svg2",
        {
          duration: 0.8,
          opacity: 0,
          scale: 0,
          ease: "power1.in",
        },
        "<"
      );

    t2.to("#code", { duration: 1, morphSVG: "#code2" }, "+=1")
      .to("#code", { duration: 1, morphSVG: "#code3" }, "+=1")
      .to("#code", { duration: 1, morphSVG: "#code" }, "+=1");

    t3.to("#handcuffs", { duration: 1, morphSVG: "#scale" }, "+=1")
      .to("#handcuffs", { duration: 1, morphSVG: "#magnifying-glass" }, "+=1")
      .to("#handcuffs", { duration: 1, morphSVG: "#handcuffs" }, "+=1");

    master.add(t1, "<").add(t2, "=+0.5").add(t3, "<");
  }, []);

  return (
    <div
      id="resume-container"
      className="relative grid grid-cols-1 md:grid-rows-2
       min-h-screen heropattern-texture-stone-700 
       bg-clip-padding"
    >
      <div className="row justify-self-end self-center md:pt-24 md:mr-52 md:ml-72">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          id="svg1"
          className="w-12 h-12 fill-red-600 float-left"
        >
          <path
            id="handcuffs"
            className="visible"
            d="M240 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM192 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32 80c17.7 0 32 14.3 32 
      32h8c13.3 0 24 10.7 24 24v16c0 1.7-.2 3.4-.5 5.1C280.3 229.6 320 286.2 320 352c0 88.4-71.6 160-160 160S0 440.4 0 352c0-65.8 39.7-122.4 96.5-146.9c-.4-1.6-.5-3.3-.5-5.1V184c0-13.3 
      10.7-24 24-24h8c0-17.7 14.3-32 32-32zm0 320a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm192-96c0-25.9-5.1-50.5-14.4-73.1c16.9-32.9 44.8-59.1 78.9-73.9c-.4-1.6-.5-3.3-.5-5.1V184c0-13.3 
      10.7-24 24-24h8c0-17.7 14.3-32 32-32s32 14.3 32 32h8c13.3 0 24 10.7 24 24v16c0 1.7-.2 3.4-.5 5.1C600.3 229.6 640 286.2 640 352c0 88.4-71.6 160-160 160c-62 0-115.8-35.3-142.4-86.9c9.3-22.5 
      14.4-47.2 14.4-73.1zm224 0a96 96 0 1 
      0 -192 0 96 96 0 1 0 192 0zM368 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm80 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          />
          <path
            id="scale"
            className="invisible"
            d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 
        57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 
        32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 
        37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 
        0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 
        24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 
        320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 
        5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"
          />
          <path
            id="magnifying-glass"
            className="invisible"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 
        12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 
        416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
        <p
          id="para1"
          className="text-start text-gray-200 text-3xl leading-relaxed"
        >
          I spent the past 15 years in the retail industry as an investigator.
        </p>
      </div>
      <div className="row justify-self-start self-center md:pb-24 md:ml-52 md:mr-72">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          id="svg2"
          className="w-12 h-12 stroke-red-600 fill-red-600 stroke-2 float-right"
        >
          <path
            id="code"
            className="visible"
            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 
      39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 
      256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 
      0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 
      0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 
      0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
          />
          <path
            id="code2"
            className="invisible"
            d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 
          61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 
          288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 
          70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 
          44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 
          112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 
          48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
          />
          <path
            id="code3"
            className="invisible"
            d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 
          12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 
          256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 
          32-32z"
          />
        </svg>
        <p
          id="para2"
          className="text-gray-200 text-3xl leading-relaxed justify-self-start"
        >
          Now I have made the leap into the tech world developing applications.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
