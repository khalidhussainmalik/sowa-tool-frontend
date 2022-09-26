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
import { Link } from "react-router-dom";

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
            <div className="notification">
              <span><FontAwesomeIcon icon={faUserFriends} /></span>
              <span>Login</span>
              <span>

                <FontAwesomeIcon icon={faSliders} />
              </span>
              <span>
                <FontAwesomeIcon icon={faHeart} />

              </span>

              <span>
                <FontAwesomeIcon icon={faShoppingBag} />

              </span>
              <span>0</span>
              <span>

                <FontAwesomeIcon icon={faAlignRight} />
              </span>
              <span>

                <img src={country} alt="country" />
              </span>
            </div>

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
          <Link className="link" to="/shop-all-products">Shop All Products</Link>
          </li>
          <li>
          <Link className="link" to="/shop-by-brand">Shop By Brand</Link>
          </li>
          <li>
            <Link className="link" to="/download-center">Download Center</Link>
          </li>
          <li>
            <Link className="link" to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link className="link" to="/about-us">About Us</Link>
          </li>
          <li>
            <Link className="link" to="/careers">Careers</Link>
          </li>
          <li>
            <Link className="link" to="/support">Support</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="link" to="/quick-order">Quick Order</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
