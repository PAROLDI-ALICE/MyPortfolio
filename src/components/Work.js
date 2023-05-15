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
import Card from "./Card";

function Work() {
  let array = [
    {
      image: "../public/images/DSCF2238.jpg",
      legend: " 1 Lorem ipsum ",
    },
    {
      image: "../public/images/DSCF2238.jpg",
      legend: " 2 Lorem ipsum ",
    },
  ];

  const renderMyArray = () => {
    return array.map((item) => {
      return <Card title={item.legend} />;
    });
  };

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
          <div className="divTitle">
            <h2>My projects</h2>
          </div>
          {renderMyArray()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Work;
