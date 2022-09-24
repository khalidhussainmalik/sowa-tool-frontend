import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1 className="phonenumber">
          <strong>1-800-265-8221 </strong>
          <span className="work-hours">
            Monday - Friday, 8:00 am - 5:30 pm EST
          </span>
        </h1>
      </div>
      <div className="footer-down d-flex">
        <div className="columns">
        <h3>Accounts</h3>
          <ul>
            <li>
              <a href="#">Customer Login</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Ordering, Shopping & Payment</a>
            </li>
            <li>
              <a href="#">Help & Support</a>
            </li>
          </ul>
        </div>
        <div className="columns">
        <h3>Download</h3>
          <ul>
            <li>
              <a href="#">Catalogue & Brochures</a>
            </li>
            <li>
              <a href="#">GS Tooling Package Forms</a>
            </li>
            <li>
              <a href="#">RGA</a>
            </li>
            <li>
              <a href="#">Quote Request Forms</a>
            </li>
          </ul>
        </div>
        <div className="columns">
        <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Request Information</a>
            </li>
            <li>
              <a href="#">Give Us Your Feedback</a>
            </li>
          </ul>
        </div>
        <div className="columns">
        <div className="find">
        <a href="">Find a Distributor</a>
        </div>
        </div>
        <div className="columns">
        <h3>WE'RE SOCIAL</h3>
          <ul className="social">
            <li>
              <a href="#"><span><FontAwesomeIcon icon={faFacebookF}/></span></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
