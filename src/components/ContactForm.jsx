import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "yaWyunWk6MZdAVQlJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormDetails({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(
            "There was an error sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <div className="container w-11/12 md:w-2/3 mx-auto mb-8">
      <h1 className="mb-4 p-2 text-gray-900 text-center font-semibold text-4xl">Contact</h1>
        <p className="text-gray-900 text-2xl font-semibold text-center mb-4">
            Have a question or want to work together? Send me a message!
        </p>

      <form
        className="flex flex-col items-center justify-center 
        content-stretch w-full border-2 font-landing
        border-gray-200 p-4 bg-slate-700 bg-opacity-80 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <label htmlFor="user_name" className="text-gray-200 mb-2">Name</label>
        <input
          type="text"
          id="user_name"
          name="user_name"
          className="w-2/3 mb-4 p-1 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formDetails.user_name}
          onChange={handleChange}
        />

        <label htmlFor="user_email" className="text-gray-200 text-start mb-2">Email</label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          className="w-2/3 mb-4 p-1 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formDetails.user_email}
          onChange={handleChange}
        />

        <label htmlFor="message" className="text-gray-200 text-start mb-2">Message</label>
        <textarea
          name="message"
          rows="6"
          className="w-2/3 mb-4 p-1 focus:outline-none focus:ring-2 focus:ring-red-500"
          value={formDetails.message}
          onChange={handleChange}
        />

        <button
          className="text-gray-200 border-2 border-gray-200 py-2 px-4 
          rounded-2xl hover:border-red-600 
          hover:ring-2 hover:ring-gray-200"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
