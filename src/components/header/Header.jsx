import React from "react";
import header1 from '../header/images/header1.jpg';
import header2 from '../header/images/header2.jpg';
import header3 from '../header/images/header3.jpg';
import header4 from '../header/images/header4.jpg'

function Header() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={header1} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={header2} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={header3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={header4} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
