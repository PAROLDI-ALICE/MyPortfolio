import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="myFooter">
      <div id="footerText">
        {" "}
        <p>
          © Made in{" "}
          <span>
            {" "}
            <FontAwesomeIcon icon={faReact} />
          </span>{" "}
          by Alice Paroldi | 2023
        </p>
      </div>
    </div>
  );
}
export default Footer;
