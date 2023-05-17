import React from "react";
import { useState } from "react";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import "../ContactForm.css";

function Contact() {
  return (
    <div>
      <Header />
      <div className="workMain">
        <div className="divTitle">
          <h2>Parlons dév</h2>
        </div>
        <div className="displayContact">
          <div className="aboutIcons">
            <div className="workIcons">
              <a href="https://www.linkedin.com/in/alice-paroldi-389abb24a">
                <FontAwesomeIcon icon={faMessage} />
              </a>
              <a href="https://github.com/PAROLDI-ALICE">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </a>
            </div>
          </div>
          <div className="aboutText"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
