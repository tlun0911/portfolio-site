import React, { useState } from "react";
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
      .sendForm("contact_service", "contact_form", e.target, 'yaWyunWk6MZdAVQlJ')
      .then(
        (result) => {
          console.log(result.text);
          // Reset form or show a success message
        },
        (error) => {
          console.log(error.text);
          // Handle errors here
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-white">Name</label>
      <input
        type="text"
        name="user_name"
        value={formDetails.user_name}
        onChange={handleChange}
      />

      <label className="text-white">Email</label>
      <input
        type="email"
        name="user_email"
        value={formDetails.user_email}
        onChange={handleChange}
      />

      <label className="text-white">Message</label>
      <textarea
        name="message"
        value={formDetails.message}
        onChange={handleChange}
      />

      <button className='text-white' type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
