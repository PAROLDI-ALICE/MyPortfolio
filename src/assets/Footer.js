import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="myFooter">
      <p id="footerText">
        {" "}
        © Made in <FontAwesomeIcon icon={faReact} /> by Alice Paroldi | 2023
      </p>
    </div>
  );
}
export default Footer;
