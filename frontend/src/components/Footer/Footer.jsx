import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Good food is the foundation of genuine happiness Bringing delicious
            food to your doorstep, one order at a time.{" "}
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.twitter_icon} alt="twitter" />
            <img src={assets.linkedin_icon} alt="linkedin" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+91 1234567890</li>
            <li>+91 0987654321</li>
            <li>praveen@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© 2025 FooDel – Crafted with passion. All rights reserved.</p>
    </div>
  );
};

export default Footer;
