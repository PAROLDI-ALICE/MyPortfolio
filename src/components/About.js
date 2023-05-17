import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "../assets/Header";
import Footer from "../assets/Footer";

function About() {
  return (
    <div>
      <Header />
      <div className="workMain">
        <div className="displayHome">
          <div className="aboutText">
            <h2>Hi, I'm Alice...</h2>
            <p>and a junior web developer.</p>
            <p>
              I have received a comprehensive training in both front-end and
              back-end languages with a strong focus on PHP and JavaScript.
            </p>
            <p>
              I am now able to code in different frameworks for responsive
              website or apps.
            </p>
            <p>
              I am open-minded and enthousiastic, always ready to collaborate
              and eager to embrace new challenges.{" "}
            </p>
            <p>
              Stuck at some point in the code? <br />
              Must be a way out, anyway. Keep coding! :)
            </p>
          </div>
          <div className="aboutIcons">
            <div className="workIcons">
              <a href="https://www.linkedin.com/in/alice-paroldi-389abb24a">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/PAROLDI-ALICE">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
