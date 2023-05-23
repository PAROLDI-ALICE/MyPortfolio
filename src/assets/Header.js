import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Name from "../components/Name";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <div className="divPress">
        <div className="letterBox">
          <a href="/CV_Alice_Paroldi_Web_Dev_Alternance.pdf" download>
            <span className="initials">AP</span>
          </a>
        </div>
      </div>
      <div className="divName">
        <Name />
      </div>
      <div className="divInfo">
        <div className="onglets">
          <Link className="link" to="/">
            Accueil
          </Link>
        </div>
        <div className="onglets">
          <Link className="link" to="/work">
            Réalisations
          </Link>
        </div>
        <div className="onglets">
          <Link className="link" to="/about">
            À propos
          </Link>
        </div>
        <div className="ongletContact">
          <Link className="linkContact" to="/contact">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
