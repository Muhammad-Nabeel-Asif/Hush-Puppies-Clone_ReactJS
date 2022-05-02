import React from "react";
import { Link } from "react-router-dom";

import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

import "./css/Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="col col_1">
        <div className="heading__primary">Hush Puppies</div>
        <div className="col_1_icons">
          <div>
            <Link to="/" className="link">
              {" "}
              <AiFillFacebook />{" "}
            </Link>
          </div>
          <div>
            <Link to="/" className="link">
              {" "}
              <AiFillTwitterSquare />{" "}
            </Link>
          </div>
          <div>
            <Link to="/" className="link">
              {" "}
              <AiFillInstagram />{" "}
            </Link>
          </div>
          <div>
            <Link to="/" className="link">
              {" "}
              <AiFillYoutube />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="col col_2">
        <div className="heading__secondary">My Account</div>
        <ul className="account_list">
          <li>Sign In</li>
          <li>Register</li>
          <li>Order Status</li>
          <li>Shopping Cart</li>
        </ul>
      </div>
      <div className="col col_3">
        <div className="heading__secondary">Customer Service</div>
        <ul className="account_list">
          <li>+923481114747</li>
          <li>Contact Us</li>
          <li>Shipping Information</li>
          <li>Returns & Exchanges</li>
          <li>FAQS</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="col col_4">
        <div className="heading__secondary">Resources</div>
        <ul className="account_list">
          <li>Bright Side Blog</li>
          <li>Find A Store</li>
          <li>Size Chart Guide</li>
        </ul>
      </div>
      <div className="col col_5">
        <p className="heading__secondary font_basset">
          Join Us On The Bright Side
        </p>
        <p className="paragraph">
          Join us and You'll be the first to know about the latest styles and
          promotions.
        </p>
        <div className="form">
          <div>
            <input type="text" placeholder="Email Address" />
          </div>
          <div>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
