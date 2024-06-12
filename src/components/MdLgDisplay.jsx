import React from "react";
import PropTypes from "prop-types";

const MdLgDisplay = ({ skill }) => {
  const skills = {
    python:
      "I have experience using Python to build back end applications and scripts, using Django and Flask frameworks.",
    javascript:
      "I have experience using JavaScript to build both front end and back end applications, using frameworks like React and Node.",
    react:
      "I have used React for several projects, including this site! I have experience with concepts like hooks, context, and routing, and also using Redux for state management.",
    node: "I have built several back end applications using Node.js, including RESTful APIs. ",
    express:
      "I have experience using Express.js to build back end applications and implement user authentication.",
    mongodb:
      "I have experience using MongoDB to build NoSQL databases for applications.",
    bootstrap:
      "I have used Bootstrap for several projects to build and style responsive web pages. I also have experience with Bootstrap components, grid system, and utilities.",
    css: "I have experience using CSS to style web pages and create animations.",
    html: "I have experience using HTML to build web pages and structure content.",
    github:
      "I have experience using Git and GitHub for version control and collaboration, as well as deploying sites using GitHub Pages.",
    django:
      "I have used Django to build several back end applications and APIs. I have experience with Django REST framework, user authentication, and database migrations.",
    mysql:
      "I have experience using MySQL to build relational databases for applications, in conjunction with Django ORM model.",
    docker:
      "I have used Docker to containerize several applications and deploy them to the cloud, and have also used Kubernetes for container orchestration.",
    tailwind:
      "I have used Tailwind CSS for several projects to build and style responsive web pages, including this site!",
  };

  return (
    <>
      <h2
        className="text-2xl md:text-4xl font-semibold bg-clip-text bg-blend-normal
      bg-gradient-to-b from-red-600 to-white
      text-transparent pb-2 md:pb-6 pt-2 md:pt-4"
      >
        {skill.charAt(0).toUpperCase() + skill.slice(1)}
      </h2>
      <p className="text-lg md:text-2xl text-white md:leading-loose pb-2">
        {skills[skill]}
      </p>
    </>
  );
};

MdLgDisplay.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default MdLgDisplay;
