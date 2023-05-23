import React from "react";
import { useState } from "react";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import "../ContactForm.css";

function Contact() {
  const [displayTooltip, setDisplayTooltip] = useState(false);

  const handleButtonClick1 = () => {
    setDisplayTooltip(!displayTooltip);
  };
  return (
    <div>
      <Header />
      <div className="workMain">
        <div className="displayHome">
          <div className="aboutIcons">
            <div className="workIcons">
              <div className="tooltip-container ">
                <button className="buttonContact" onClick={handleButtonClick1}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
                {displayTooltip && (
                  <p id="tooltip-text">aliceparoldi@gmail.com</p>
                )}
              </div>
              <div className="tooltip-container ">
                <p id="tooltip-text">The tooltip text.</p>
                <button className="buttonContact" onClick={handleButtonClick1}>
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                </button>
              </div>
            </div>
          </div>
          <div className="aboutText">
            <h2>Parlons dév...</h2>
            <p>Well, it's no rocket science!</p>
            <p>aliceparoldi@gmail.com</p>
            <p>06.27.62.96.87</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
