import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faJavaScript,
  faLaravel,
  faWordpress,
  faTrello,
  faPHP,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import Card from "./Card";

function Work() {
  let array = [
    {
      image: "/images/DSCF2238.jpg",
      legend: " 1 Lorem ipsum ",
    },
    {
      image: "/images/DSCF2238.jpg",
      legend: " 2 Lorem ipsum ",
    },
    {
      image: "/images/DSCF2238.jpg",
      legend: " 3 Lorem ipsum ",
    },
    {
      image: "/images/DSCF2238.jpg",
      legend: " 4 Lorem ipsum ",
    },
    {
      image: "/images/DSCF2238.jpg",
      legend: " 5 Lorem ipsum ",
    },
    {
      image: "/images/DSCF2238.jpg",
      legend: " 6 Lorem ipsum ",
    },
  ];

  const renderMyArray = () => {
    return array.map((item, index) => {
      return <Card key={index} image={item.image} legend={item.legend} />;
    });
  };

  return (
    <div>
      <Header />
      <div className="workMain">
        <div className="divTitle">
          <h2>Projects with</h2>
          <div className="workIcons">
            <a href="https://github.com/PAROLDI-ALICE">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faLaravel} />
            <FontAwesomeIcon icon={faWordpress} />
            <FontAwesomeIcon icon={faTrello} />
          </div>
          {/* <div className="divTitle">
            <h2>My projects</h2>
          </div> */}
          <div className="workCards">{renderMyArray()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Work;
