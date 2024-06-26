import { useEffect } from "react";
import cert from "../assets/cert.png";


const Story = () => {


  return (
    <div
      className="container mx-auto px-6 md:px-12 lg:px-20"
      id="about-me-heading"
    >
      <div className="text-center mb-10 my-16">
        <div id="about-me">
          <h2 className="text-4xl font-bold text-gray-200" id="heading2">
            About Me
          </h2>
        </div>
        <p className="text-lg text-gray-200 mt-4">
          Hey there, welcome to my site! My name is Tom and I am an aspiring
          full stack developer. For the past 20 years, I've honed my skills and
          built a career as an investigator in the retail industry. My
          experience has given me a deep understanding of problem-solving,
          attention to detail, and analytical thinking. Now, I'm channeling
          these skills into a new passion:{" "}
          <span className="text-red-600">software development</span>.
        </p>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-200">How I Got Here</h3>
          <p className="text-gray-200 text-lg mt-4">
            I originally went to school for computer science, but ended up
            changing my major and graduated with a degree in criminal justice.
            Earlier this year, I was unforuntately laid off from my job and
            found myself at a crossroads. I decided to take the opportunity to
            pursue my original passion and dive back into the tech world. I
            enrolled in a certification program and earned a Full Stack
            Developer certification from IBM. I've been pushing myself to learn
            new skills ever since, and I'm excited to see where this journey
            takes me!
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              Certifications
            </h3>
            <img
              src={cert}
              alt="Full Stack Developer Certification"
              className="hover:"
            />
            <a
              href="https://coursera.org/verify/MX7VBZB3UD9C"
              className="text-gray-200 block text-xl underline mt-4 hover:text-red-600"
              target="_blank"
            >
              Verify Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
