import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faLaravel,
  faTrello,
  faPHP,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../assets/Header";
import Footer from "../assets/Footer";

function Work() {
  return (
    <div>
      <Header />
      <div className="workMain">
        <div className="divTitle">
          <h2>Working with</h2>
          <div className="workIcons">
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faLaravel} />
            <FontAwesomeIcon icon={faTrello} />
            <a href="https://github.com/PAROLDI-ALICE">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="divTitle">
          <h2>My projects</h2>
        </div>
        <div className="workCards">
          <div className="card">
            <div className="picLegend">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Work;
