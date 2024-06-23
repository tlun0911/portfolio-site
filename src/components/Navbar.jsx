import { SocialIcon } from "react-social-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="md:visible hidden md:flex md:justify-between md:mx-6">
        <div className="flex justify-between">
          <div className="flex justify-start flex-grow">
            <SocialIcon
              url="https://www.linkedin.com/in/thomas-lunt-cfi-37195098"
              className="mr-4 border border-white rounded-full hover:ring-2 hover:ring-white hover:scale-125"
              target="_blank"
              fgColor="#fff"
            />
            <SocialIcon
              url="https://github.com/tlun0911"
              className="mr-4 border border-white rounded-full hover:ring-2 hover:ring-white hover:scale-125"
              target="_blank"
              fgColor="#fff"
            />
            <SocialIcon
              url="https://www.upwork.com/freelancers/~01c8e90f051d0a48bc?viewMode=1"
              className="mr-4 border border-white rounded-full hover:ring-2 hover:ring-white hover:scale-125"
              target="_blank"
              fgColor="#fff"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-grow justify-center md:justify-end space-x-4 mx-8 md:mx-7 items-center">
        <a href="#landing" id="landing-link" className="hover:text-red-600">
          Home
        </a>
        <a href="#story" id="aboutme-link" className="hover:text-red-600">
          About Me
        </a>
        <a href="#skills" id="career-link" className="hover:text-red-600">
          Skills
        </a>
        <a href="#projects" id="projects-link" className="hover:text-red-600">
          Projects
        </a>
      </div>
    </>
  );
};

export default Navbar;
