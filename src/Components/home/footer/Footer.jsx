import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="w-100 pt-5 pb-5" />
      <a href="#" target="_blank">
        <div className="logo-originals-color mx-auto" />
      </a>
      <div className="w-100 p-3 text-secondary text-center small">
        <small>
          Part of the
          <a
            className="text-decoration-none fw-bold text-secondary"
            href="#"
            target="_blank"
            // onclick="trackAppSumoClick(this, 'footer')"
          >
            UltraSignSolutions
          </a>
          family. © 2023 Garrision Group, Inc. All rights reserved.{" "}
          <a className="text-secondary" href="#">
            Terms
          </a>
          <a className="text-secondary" href="#">
            Privacy
          </a>
          .
        </small>
      </div>
    </>
  );
};

export default Footer;
