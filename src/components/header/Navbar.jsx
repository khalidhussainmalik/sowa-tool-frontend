import React from "react";
import logo from "./images/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignRight,
  faHeart,
  faShoppingBag,
  faSliders,
  faUserFriends,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import country from "./images/countrycanada.png";

function Navbar() {
  return (
    <div className="main">
      <div className="nav_up">
        <div className="logo">
          <img src={logo} alt="logo" />
          <p>TOOLING YOUR WORLD</p>
        </div>
        <div className="nav_up_left">
          <div className="search">
            <div className="search_icon">
              <input />
              <FontAwesomeIcon icon={faSearch} id="search_icon" />
            </div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faUserFriends} />
              </li>
              <li>Login</li>
              <li>
                <FontAwesomeIcon icon={faSliders} />
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} />
              </li>
              <li>
                <FontAwesomeIcon icon={faShoppingBag} />
              </li>
              <li>0</li>
              <li>
                <FontAwesomeIcon icon={faAlignRight} />
              </li>
              <li>
                <img src={country} alt="country" />
              </li>
            </ul>
          </div>
          <div className="contact">
            <p>
              1-800-265-8221 <span>sales@sowatool.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="nav_down">
        <ul>
          <li>
            <a href="">Shop All Products</a>
          </li>
          <li>
            <a href="">Shop By Brand</a>
          </li>
          <li>
            <a href="">Download Center</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Quick Order</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
