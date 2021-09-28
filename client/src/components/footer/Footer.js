import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer" style={{ display: "flex", width: "100%" }}>
        <div className="footer-container">
          <div className="row">
            <div className="footer-col">
              <h4>Quick links</h4>
              <ul>
                <li>Home</li>
                <Link to="/parking" className=".link">
                  <li style={{ marginTop: "10px" }}>Our parking</li>
                </Link>
                <Link to="/login" className=".link">
                  <li style={{ marginTop: "10px" }}>Login</li>
                </Link>

                <Link to="/signup">
                  <li style={{ marginTop: "10px" }}>Signup</li>
                </Link>
              </ul>
            </div>

            <div className="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  Smart parking system is the the parking system with online
                  booking and number plate detection.
                </li>
              </ul>
            </div>
            <div className="footer-col" style={{}}>
              <h4>follow us</h4>
              <div className="social-links">
                <a href="www.google.com">
                  <i className="fab fa-google"></i>
                </a>
                <a href="www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="www.twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
