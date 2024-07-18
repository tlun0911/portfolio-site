import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="min-w-screen h-1/2 text-gray-200 text-center bg-opacity-80 bg-slate-700 py-16">
      <p className="text-xl text-gray-200 mb-8">&copy; 2024 Thomas Lunt</p>
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
              className="border border-white rounded-full hover:ring-2 hover:ring-white hover:scale-125"
              target="_blank"
              fgColor="#fff"
            />
    </div>
  );
};

export default Footer;
