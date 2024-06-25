import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import budget1 from "../assets/Budget/budget_allocation.png";
import budget2 from "../assets/Budget/budget_morethan_spending.png";
import budget3 from "../assets/Budget/budget_not_exceeding.png";
import budget4 from "../assets/Budget/currency_change.png";
import budget5 from "../assets/Budget/currency_dropdown.png";

const Budget = () => {
  return (
    <div className="mb-10 flex flex-col md:justify-center md:flex-row items-center">
      <div
        className="mx-4 p-6 shadow-sm shadow-white
       flex flex-col md:items-center md:justify-center md:w-2/5 bg-black
        bg-opacity-20 bg-cover rounded-xl"
      >
        {" "}
        <h3 className="text-gray-200 font-bold bg-red-600 bg-clip-text text-center md:text-start text-2xl mb-2">
          Budget App
        </h3>
        <p className="text-gray-200 text-md md:text-lg text-center md:text-start mb-4 ">
          A budget app created with React and uses Context for state management.
          The app allows the user to input their budget and expenses. The app
          will provide warnings for if their spending exceeds the budget or if
          the budget is set lower than current allocated spending. The app also
          allows the user to change the currency of their budget.
        </p>
        <a
          href="https://github.com/tlun0911/ejtos-react_budget_app"
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
          className="flex items-center mx-auto md:w-4/5"
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
          <div className="flex flex-col ">
            <h3 className="text-gray-200 text-center text-2xl">
              Budget Main Screen
            </h3>
            <img src={budget1} className="md:scale-75" alt="Car Dealership" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-gray-200 text-center text-2xl">
              Budget Lower Than Spending Warning
            </h3>
            <img src={budget2} className="md:scale-75" alt="Car Dealership" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-gray-200 text-center text-2xl">
              Exceeding Budget Warning
            </h3>
            <img src={budget3} className="md:scale-75" alt="Car Dealership" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-gray-200 text-center text-2xl">Currency Change</h3>
            <img src={budget4} className="md:scale-75" alt="Car Dealership" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-gray-200 text-center text-2xl">
              Currency Dropdown
            </h3>
            <img src={budget5} className="md:scale-75" alt="Car Dealership" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Budget;
