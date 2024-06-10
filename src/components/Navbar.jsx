import { SocialIcon } from "react-social-icons";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  PopoverOverlay
} from "@headlessui/react";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="flex box-border sticky content-center bg-gray-800 max-w-full text-white md:text-2xl py-4 z-50"
    >
      <div className="flex md:hidden order-last items-center">
        <Popover className="relative">
          <PopoverButton id="togglemenu">
            <FaBars className="text-white mx-6" style={{ fontSize: "28px" }} />
          </PopoverButton>
          <PopoverOverlay className="fixed inset-0 bg-black/15" />
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel
              anchor="bottom end"
              className="absolute flex flex-col items-center py-4 space-y-8 border-2 border-red-600 text-white text-xl left-150 mt-5 z-50 w-1/2 h-auto bg-gray-800 rounded-lg shadow-lg"
            >
              <a href="#story" id="aboutme-link" className="hover:text-red-600">
                About Me
              </a>
              <a href="#career" id="career-link" className="hover:text-red-600">
                Career
              </a>
              <a href="/" id="projects-link" className="hover:text-red-600">
                Projects
              </a>
              
              <SocialIcon
                url="https://www.linkedin.com/in/thomas-lunt-cfi-37195098"
                className=" border border-white rounded-full hover:ring-2 hover:ring-white"
                target="_blank"
                fgColor="#fff"
                style={{ width: 75, height: 75 }}
              />
    
              <SocialIcon
                url="https://github.com/tlun0911"
                className="border border-white rounded-full hover:ring-2 hover:ring-white"
                target="_blank"
                fgColor="#fff"
                style={{ width: 75, height: 75 }}
              />
              <SocialIcon
                url="https://www.upwork.com/freelancers/~01c8e90f051d0a48bc?viewMode=1"
                className="border border-white rounded-full hover:ring-2 hover:ring-white"
                target="_blank"
                fgColor="#fff"
                style={{ width: 75, height: 75 }}
              />
            </PopoverPanel>
          </Transition>
        </Popover>
      </div>

      <div className="md:visible hidden md:flex md:justify-between md:mx-6">
        <div className="flex justify-between">
          <div className="flex justify-start flex-grow">
            <SocialIcon
              url="www.linkedin.com/in/thomas-lunt-cfi-37195098"
              className="mr-4 border border-white rounded-full hover:ring-2 hover:ring-white"
              target="_blank"
              fgColor="#fff"
            />
            <SocialIcon
              url="https://github.com/tlun0911"
              className="mr-4 border border-white rounded-full hover:ring-2 hover:ring-white"
              target="_blank"
              fgColor="#fff"
            />
            <SocialIcon
              url="https://www.upwork.com/freelancers/~01c8e90f051d0a48bc?viewMode=1"
              className="mr-4 border border-white rounded-full hover:ring-2 hover:ring-white"
              target="_blank"
              fgColor="#fff"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-grow justify-start md:justify-end space-x-4 mx-8 md:mx-7 items-center">
        <a href="#story" id="aboutme-link" className="hover:text-red-600">
          About Me
        </a>
        <a href="#career" id="career-link" className="hover:text-red-600">
          Career
        </a>
        <a href="/" id="projects-link" className="hover:text-red-600">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Navbar;
