import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          Developed<i className="fas fa-heartbeat" /> by{" "}
          <a
            className="profile"
            href="https://github.com/mutandiwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Iam Mutandiwa
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
