import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import mealPlannerImg1 from "../assets/Meal_planner/Meal_planner_landing.png";
import mealPlannerImg2 from "../assets/Meal_planner/Meal_planner_meal_detail.png";
import mealPlannerImg3 from "../assets/Meal_planner/Meal_planner_mobile_1.png";
import mealPlannerImg5 from "../assets/Meal_planner/Meal_planner_plan_detail.png";
import mealPlannerImg4 from "../assets/Meal_planner/Meal_planner_plan_page.png";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mt-20 flex-col mx-auto items-center justify-center"
    >
      <h1 className="mb-4 text-white text-center text-4xl">Projects</h1>

      <div className="flex flex-col px-4 mb-6 items-center justify-center">
        <h3 className="text-white text-2xl mb-2">Meal Planner App</h3>
        <p className="text-black text-lg bg-gray-400 mb-4 text-center border-2 border-red-600 rounded">
          The Meal Planner is a live full stack application for saving recipes
          and creating weekly meal plans. The backend API was build with
          NodeJS/Express and MongoDB was used for the database. The frontend was
          built with React and uses Redux for state management. Please note that
          the app is hosted on a free Render server and may take a few seconds
          to load!
        </p>
        <a href="https://meal-planner-692u.onrender.com/" target="_blank">
          <button className="border-2 border-red-600 text-red-600 px-4 py-2 mb-2 rounded">
            View Project
          </button>
        </a>
      </div>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="flex items-center mx-auto"
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
          <h3 className="text-white text-center text-2xl mb-2">Landing Page</h3>
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
          <h3 className="text-white text-center text-2xl mb-2">
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
          <h3 className="text-white text-center text-2xl mb-2">
            Meal Plan Page
          </h3>
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
          <h3 className="text-white text-center text-2xl mb-2">
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
          <h3 className="text-white text-center text-2xl mb-2">
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
    </section>
  );
};

export default Projects;
