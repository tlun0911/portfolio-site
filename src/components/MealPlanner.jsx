import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mealPlannerImg1 from "../assets/Meal_planner/Meal_planner_landing.png";
import mealPlannerImg2 from "../assets/Meal_planner/Meal_planner_meal_detail.png";
import mealPlannerImg3 from "../assets/Meal_planner/Meal_planner_mobile_1.png";
import mealPlannerImg5 from "../assets/Meal_planner/Meal_planner_plan_detail.png";
import mealPlannerImg4 from "../assets/Meal_planner/Meal_planner_plan_page.png";

const MealPlanner = () => {
  return (
    <div className="mb-10 flex flex-col md:justify-center md:flex-row items-center">
      <div
        className="mx-4 p-6 shadow-sm shadow-white
       flex flex-col md:items-center md:justify-center md:w-2/5 bg-black
        bg-opacity-20 bg-cover rounded-xl"
      >
        <h3 className="text-gray-200 font-bold text-center md:text-start text-2xl mb-2">Meal Planner App</h3>
        <p className="text-gray-200 text-md md:text-lg text-center md:text-start mb-4 ">
          The Meal Planner is a live full stack application for saving recipes
          and creating weekly meal plans. The backend API was build with
          NodeJS/Express and MongoDB was used for the database. The frontend was
          built with React and uses Redux for state management. Please note that
          the app is hosted on a free Render server and may take a few seconds
          to load!
        </p>
        <a
          href="https://meal-planner-692u.onrender.com/"
          target="_blank"
          className="text-gray-200 underline mb-1 font-bold text-center md:text-start hover:text-red-600"
        >
          Check it out here
        </a>
      </div>
      <div className="w-11/12 md:w-3/5 md:grow md:flex md:justify-center">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="md:w-4/5"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="justify-center items-center my-auto"
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
          <div className="flex flex-col grow items-center">
            <h3 className="text-gray-200 text-center text-2xl mb-4">
              Landing Page
            </h3>
            <img
              src={mealPlannerImg1}
              className=""
              alt="Meal Planner"
              style={{
                display: "block",

                margin: "auto",
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-200 text-center text-2xl">
              Meal Detail Page
            </h3>
            <img
              src={mealPlannerImg2}
              className=""
              alt="Meal Planner"
              style={{
                display: "block",

                margin: "auto",
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-200 text-center text-2xl">Meal Plan Page</h3>
            <img
              src={mealPlannerImg4}
              className=""
              alt="Meal Planner"
              style={{
                display: "block",

                margin: "auto",
              }}
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-200 text-center text-2xl">
              Meal Plan Detail Page
            </h3>
            <img
              src={mealPlannerImg5}
              className=""
              alt="Meal Planner"
              style={{
                display: "block",

                margin: "auto",
              }}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-200 text-center text-2xl mb-4">
              Meal Detail Page Mobile View
            </h3>
            <img
              src={mealPlannerImg3}
              className="object-scale-down h-48 md:h-96"
              alt="Meal Planner"
              style={{
                display: "block",
              }}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default MealPlanner;
