import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../assets/Header";
import Footer from "../assets/Footer";

function Home() {
  useEffect(() => {}, []); // getting the picture loaded asap
  return (
    <div className="home">
      <Header />
      <div className="displayHome">
        <div className="firstHomeBox">
          <p id="homeMotto">
            {[
              "Ceci n'est",
              "pas un",
              <Link className="linkPortfolio" to="/work">
                portfolio
              </Link>,
            ].map((line, index) => (
              <span key={index}>{line}</span>
            ))}
          </p>
        </div>
        <div className="secondHomeBox"></div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
