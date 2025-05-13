import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
import LogoText from "../img/logo-text.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={LogoText} alt="" className="footer-logo" />
          <p>Home of Indian Hausa and Hausa Film</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/download-app">Download App</Link>
            </li>
            <li>
              <Link to="/request-movie">Request Movie</Link>
            </li>
            <li>
              <Link to="/terms">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@arewafilm.com</p>
          <p>Phone: +234 812 345-6789</p>
          <div>
            <img src="" alt="logo" />
            <img src="" alt="logo" />
            <img src="" alt="logo" />
            <img src="" alt="logo" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Arewafilm. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
