/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";

import "./Categories.css";

const Categories = () => {
  return (
    <nav className="stroke">
      <ul className="nav_ul">
        <li className="nav_ul_li">
          <a href="/" className="links">
            <div class="dropdown">
              <button class="dropbtn">Men</button>
              <div class="dropdown-content">
                <a href="/">New Arrivals</a>
                <a href="/">Waterproof</a>
                <a href="/">Body Shoe</a>
                <a href="/">Good Shoe</a>
                <a href="/">Bounce</a>
              </div>
            </div>
          </a>
        </li>
        <li className="nav_ul_li">
          <a href="/" className="links">
            <div class="dropdown">
              <button class="dropbtn">Women</button>
              <div class="dropdown-content">
                <a href="/">New Arrivals</a>
                <a href="/">Body Shoe</a>
                <a href="/">Good Shoe</a>
              </div>
            </div>
          </a>
        </li>
        <li className="nav_ul_li">
          <a href="/" className="links">
            <div class="dropdown">
              <button class="dropbtn">Kids</button>
              <div class="dropdown-content">
                <a href="/">New Arrivals</a>
                <a href="/">Casual Collections</a>
                <a href="/">Link 3</a>
              </div>
            </div>
          </a>
        </li>
        <li className="nav_ul_li">
          <a href="/" className="links">
            <div class="dropdown">
              <button class="dropbtn">Accessories</button>
              <div class="dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
              </div>
            </div>
          </a>
        </li>
        <li className="nav_ul_li">
          <a href="/" className="links">
            <div class="dropdown">
              <button class="dropbtn">Apparel</button>
              <div class="dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
              </div>
            </div>
          </a>
        </li>
        <li className="nav_ul_li">
          <a href="/" className="links">
            <div class="dropdown">
              <button class="dropbtn">About Us</button>
              <div class="dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
              </div>
            </div>
          </a>
        </li>
        <li className="nav_ul_li">
          <a href="/" className="links">
            <img
              src="https://cdn.shopify.com/s/files/1/0016/0074/9623/files/PeshawariZ.gif?v=1645418613"
              alt="blinking_image"
              className="blinking_image"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
