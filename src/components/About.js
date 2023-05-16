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
            <h2>Hi, I'm Alice..</h2>
            <p>
              ...and newly a junior web developer eager to embrace new
              challenge.
            </p>
            <p>
              I have received a comprehensive training in both front-end and
              back-end languages.
            </p>
            <p>
              Thanks to a strong focus on PHP and JavaScript I have gained
              experience in crafting responsive apps.
            </p>
            <p>
              I thrive in team environments and believe that diverse
              perspectives and collective brainstorming lead to innovative
              solutions.{" "}
            </p>
            <p>
              I am open-minded and enthousisatic person, always ready to
              collaborate and not feraing the unknown.{" "}
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
