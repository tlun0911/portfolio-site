import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CSSPlugin } from "gsap/CSSPlugin";
import cert from "../assets/cert.webp";

const Cert = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(CSSPlugin);
    
    const split = new SplitText("#cert-text", {
      type: "lines",
    });
    const certImg = document.querySelector("#cert-img");
    const certButton = document.querySelector("#cert-button");

    const blurImg = gsap.timeline({ paused: true });

    blurImg
      .to(certImg, {
        duration: 0.2,
        filter: "blur(0.5px)",
      })
      .to("#cert-button", {
        duration: 0.3,
        autoAlpha: 1,
      });

    split.lines.forEach((line) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: line,
          start: "top bottom", // Start the animation when the top of the line hits the bottom of the viewport
          end: "+=200", // End after 100 pixels of scrolling
          scrub: true, // Smooth scrubbing
          toggleActions: "play none none reverse",
        },
        y: 30, // Start 30 pixels below its final position
        opacity: 0,
        duration: 0.8,
        ease: "power1.out",
      });
    });

    certImg.addEventListener("mouseenter", () => {
      blurImg.play();
    });
    certImg.addEventListener("mouseleave", () => {
      blurImg.reverse();
    });
    certButton.addEventListener("mouseenter", () => {
      blurImg.play();
    });
    certButton.addEventListener("mouseleave", () => {
      blurImg.reverse();
    });
  }, []);
  return (
    <div
      id="cert-container"
      className="relative grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 mt-20 mx-4 "
    >
      <div
        id="cert-heading-container"
        className="row-1 md:row-0 md:col-1 bg-sky-800 p-4 justify-center content-center overflow-hidden"
      >
        <h1
          id="cert-text"
          className="text-gray-200 text-balance text-2xl md:text-3xl text-start overflow-hidden"
        >
          I believe in continuous learning and self-improvement. That's why when
          I found myself at a crossroads earlier this year, I decided to take
          the plunge and learn a new skillset.
          <br />
          <br /> I have taken and successfully completed a Full Stack Developer
          certification course from IBM.
        </h1>
      </div>
      <div id="img-container" className="relative row-1 md:row-0 md:col-1 p-4">
        <img
          src={cert}
          alt="cert"
          id="cert-img"
          className="border-2 border-sky-800"
        />
        <a
          type="button"
          id="cert-button"
          href="https://coursera.org/verify/MX7VBZB3UD9C"
          target="_blank"
          className="absolute top-1/2 left-1/2  transform 
          -translate-x-1/2 -translate-y-1/2 w-44 h-12 
          bg-sky-800 text-gray-200 text-center rounded-md font-bold
          flex items-center justify-center ring-2 ring-gray-200 invisible"
        >
          Verify Certificate
        </a>
      </div>
    </div>
  );
};

export default Cert;
