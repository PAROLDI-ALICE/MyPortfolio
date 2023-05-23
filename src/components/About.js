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
            <h2>Alice...</h2>
            <p>...web développeuse full stack junior.</p>
            <p>
              J'ai réalisé divers projets en Javascript, Php, React, Wordpress
              et Laravel.
            </p>
            <p>
              Je suis aujourd'hui apte à m'adapter à différents frameworks pour
              le développement de sites et d'applications.
            </p>
            <p>
              Ouverte d'esprit, enthousiaste et blaggeuse aussi, j'apprécie
              particulièrement le travail en équipe.
            </p>

            <p>
              Mon objectif actuel est donc d'intégrer une équipe investie dans
              des projets concrets.
            </p>
            <p>Je parle couramment anglais et polonais.</p>

            {/* <h2>Hi, I'm Alice...</h2>
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
            </p> */}
          </div>
          <div className="aboutIcons">
            <div className="workIcons">
              <a href="https://github.com/PAROLDI-ALICE">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/alice-paroldi-389abb24a">
                <FontAwesomeIcon icon={faLinkedin} />
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
