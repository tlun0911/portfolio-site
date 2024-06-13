import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import carDealer1 from "../assets/Capstone/about_us.png"
import carDealer2 from "../assets/Capstone/car models.png"
import carDealer3 from "../assets/Capstone/cars.png"
import carDealer4 from "../assets/Capstone/contact_us.png"
import carDealer5 from "../assets/Capstone/dealersbystate.png"
import carDealer6 from "../assets/Capstone/deployed_add_review.png"
import carDealer7 from "../assets/Capstone/deployed_landingpage.png"
import carDealer8 from "../assets/Capstone/get_dealers_loggedin.png"

const Capstone = () => {
  return (
    <div className="mb-10">
      <div className="flex md:w-3/4 flex-col px-4 mb-6 mx-auto items-center justify-center bg-gray-400 border-2 border-red-600 rounded">
        <h3 className="text-black font-bold text-2xl mb-2">Car Dealership</h3>
        <p className="text-black text-md md:text-lg text-center mb-4 ">
          Mock car dealership website with a frontend build with React. The
          backend is a django server that handles the user authentication and
          the car inventory. The dealership info and reviews are stored in a
          MongoDB database. The app also integrates an AI sentiment analyzer API
          to analyze the reviews and provide a sentiment score.
        </p>
        <a
          href="https://github.com/tlun0911/xrwvm-fullstack_developer_capstone"
          target="_blank"
          className="underline mb-1 font-bold hover:text-red-600"
        >
          Check it out here
        </a>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="flex items-center mx-auto md:w-4/5"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-center text-2xl mb-4">About Us Page</h3>
          <img
            src={carDealer1}
            className=""
            alt="Car Dealership"
            style={{
              display: "block",

              margin: "auto",
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-center text-2xl mb-4">
            Car Models
          </h3>
          <img
            src={carDealer2}
            className=""
            alt="Car Dealership"
            style={{
              display: "block",

              margin: "auto",
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-center text-2xl mb-4">
            Django Cars Models
          </h3>
          <img
            src={carDealer3}
            alt="Car Dealership"
            style={{
              display: "block",

              margin: "auto",
            }}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-center text-2xl mb-4">
            Contact Us Page
          </h3>
          <img
            src={carDealer4}
            alt="Car Dealership"
            style={{
              display: "block",

              margin: "auto",
            }}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-center text-2xl mb-4">
            Dealers by State
          </h3>
          <img
            src={carDealer5}
            className=""
            alt="Car Dealership"
            style={{
              display: "block",
            }}
          />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-center text-2xl mb-4">
            Add Review Page
          </h3>
          <img
            src={carDealer6}
            className=""
            style={{
              display: "block",
            }}
          />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-center text-2xl mb-4">
            Landing Page
          </h3>
          <img
            src={carDealer7}
            className=""
            style={{
              display: "block",
            }}
          />
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white text-center text-2xl mb-4">
            Get Dealers Page
          </h3>
          <img
            src={carDealer8}
            className=""
            style={{
              display: "block",
            }}
          />
        </div>
        
      </Carousel>
    </div>
  );
};

export default Capstone;
