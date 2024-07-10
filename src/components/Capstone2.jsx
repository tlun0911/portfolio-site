import DealerImg from "../assets/Capstone/deployed_landingpage.png";

const Capstone2 = () => {
  return (
    <div
      id="capstone-container"
      className="relative flex flex-col justify-center items-center mt-14 mx-auto w-screen"
    >
      <div className="bg-slate-700 bg-opacity-60 md:w-1/2 h-96">
        <img
          src={DealerImg}
          className="w-11/12 md:w-auto h-auto md:h-3/4 -translate-y-1/4 md:-translate-x-1/4
        hover:scale-125 duration-300 ease-in-out"
          alt="Dealer Landing Page"
        />
        <div
          className="bg-sky-800 w-4/5 h-auto
       text-gray-200 md:-translate-y-16
       md:translate-x-1/2 p-4 mb-12"
        >
          Mock car dealership website with a React frontend. The backend is a
          django server that handles the user authentication and the car
          inventory. The dealership info and reviews are stored in a MongoDB
          database and uses an Express API. The app also integrates an AI
          sentiment analyzer API to analyze the reviews and provide a sentiment
          score.
        </div>
      </div>
      <div className="mt-20 md:mt-12">
        <a
          href="https://github.com/tlun0911/xrwvm-fullstack_developer_capstone"
          target="_blank"
          className="text-gray-900 underline mb-1 font-bold text-center md:text-start hover:text-red-600"
        >
          Check out the code here
        </a>
      </div>
    </div>
  );
};

export default Capstone2;
