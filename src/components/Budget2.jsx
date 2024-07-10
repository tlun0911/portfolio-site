import React from "react";
import BudgetImg from "../assets/Budget/currency_change.png";

const Budget2 = () => {
  return (
    <div
      id="budget-container"
      className="relative flex flex-col justify-center items-center mt-14 mx-auto w-screen"
    >
      <div className="bg-slate-700 bg-opacity-60 md:w-1/2 h-96">
        <img
          src={BudgetImg}
          className="w-11/12 md:w-auto h-auto md:h-3/4 -translate-y-1/4 md:-translate-x-1/4
        hover:scale-125 duration-300 ease-in-out"
          alt="Budget Page"
        />
        <div
          className="bg-sky-800 w-4/5 h-auto
       text-gray-200 md:-translate-y-16
       md:translate-x-1/2 p-4 mb-12"
        >
          A budget app created with React and uses Context for state management.
          The app allows the user to input their budget and expenses. The app
          will provide warnings for if their spending exceeds the budget or if
          the budget is set lower than current allocated spending. The app also
          allows the user to change the currency of their budget.
        </div>
      </div>
      <div className="mt-20 md:mt-12">
        <a
          href="https://github.com/tlun0911/ejtos-react_budget_app"
          target="_blank"
          className="text-gray-900 underline mb-1 font-bold text-center md:text-start hover:text-red-600"
        >
          Check out the code here
        </a>
      </div>
    </div>
  );
};

export default Budget2;
