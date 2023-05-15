import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Name from "../components/Name";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="navBar">
      <div className="divPress">
        <div className="letter">AP</div>
      </div>
      <div className="divName">
        <Name />
      </div>
      <div className="divInfo">
        <div className="onglets">
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="onglets">
          <Link className="link" to="/work">
            Work
          </Link>
        </div>
        <div className="onglets">
          <Link className="link" to="/about">
            About
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
