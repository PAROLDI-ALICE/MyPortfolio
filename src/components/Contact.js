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
        <h2>Parlons dév</h2>
      </div>

      <Footer />
    </div>
  );
}
export default Contact;
