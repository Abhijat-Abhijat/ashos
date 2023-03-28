import React from "react";
import "../styles/Footer.scss";
import image from "../assets/ASH_OS_logo.png";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="col">
            <h3>Quick Links</h3>
            <div className="links">
              <a href="/download">Get Ash OS</a>
              <a href="/docs">Documentation</a>
              <a href="/community">Community</a>
              <a href="/about">About</a>
            </div>
          </div>
          <div className="col">
            <h3>Development</h3>
            <div className="links">
              <a href="/cc">GitHub</a>
            </div>
          </div>
          <div className="col">
            <h3>Community</h3>
            <div className="links">
              <a href="/aa">Discord</a>
              <a href="/bb">Support Forum</a>
            </div>
          </div>
          <div className="col">
            <h3>Follow Us</h3>
            <div className="links">
              <a href="/na">Facebook</a>
              <a href="/na">Instagram</a>
              <a href="/na">Twitter</a>
              <a href="/na">LinkedIn</a>
            </div>
          </div>
          <div className="col">
            <img src={image} alt="" />
            <p>© ASH OS 2023. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
