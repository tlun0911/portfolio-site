import weather_app from "../assets/weather_app.webp";

const WeatherApp = () => {
  return (
    <div
      id="capstone-container"
      className="relative flex flex-col justify-center items-center mt-14 mx-auto w-screen"
    >
      <div className="bg-slate-700 bg-opacity-60 md:w-1/2 h-96">
        <img
          src={weather_app}
          className="w-11/12 md:w-auto h-auto md:h-3/4 -translate-y-1/4 md:-translate-x-1/4
        hover:scale-125 duration-300 ease-in-out"
          alt="Weather App"
        />
        <div
          className="bg-sky-800 w-4/5 h-auto
       text-gray-200 md:-translate-y-16
       md:translate-x-1/2 p-4 mb-12"
        >
          Weather App build with React and Tailwind CSS. The app uses the
          WeatherAPI to get the current weather and 5 day forecast for any city
          in the world.
        </div>
      </div>
      <div className="mt-20 md:mt-12">
        <a
          href="https://github.com/tlun0911/weather-app/"
          target="_blank"
          className="text-gray-900 underline mb-1 font-bold text-center md:text-start hover:text-red-600"
        >
          Check out the live app here
        </a>
      </div>
    </div>
  );
};

export default WeatherApp;
