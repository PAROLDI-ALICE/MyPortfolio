import React from "react";
import { useState } from "react";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import "../ContactForm.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    // You can send the form data to your server or handle it in any other way
    console.log("Form submitted");
  };

  return (
    <div>
      <Header />
      <div className="divTitle">
        <h2>Let's talk</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Votre nom :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <br />
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Valider</button>
      </form>
      <Footer />
    </div>
  );
}
export default Contact;
