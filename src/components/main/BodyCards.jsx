import React from "react";
import newCatalog from './images/newCatalog.jpg';
import weAreHiring from './images/weAreHiring.jpg';
import './BodyCards.css'


function BodyCards() {
  return (
    <div className="m-4 p-4 d-flex">
      <div className="card m-4" style={{width: 700}}>
        <img className="card-img-top" src={newCatalog} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Check out the New Sowa Tool Catalogue
          </h5>
          <p className="card-text">
          We've revamped our Sowa Tool Catalogue to now be interactive. You can now use this interactive online version of our catalogue to easily shop for products by clicking their product code to be taken directly to the product page on the website. You can also search the catalogue by the product code or name of an item to more easily find what you're looking for.
          </p>
          <a href="#" className="btn">
            <b>Check it Out</b>
          </a>
        </div>
      </div>
      <div className="card m-4" style={{width: 700}}>
        <img className="card-img-top" src={weAreHiring} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Join the Sowa Tool Team</h5>
          <p className="card-text">
          We're always looking for new individuals with unique perspectives and experiences to help us achieve our goals. Here at Sowa we want our employees to succeed just as much as our business, so setting them up for success is paramount.
          <br />
          <br />
          Check out our current opportunities and learn more about how you can fit in the Sowa Tool Family&nbsp;below.
          </p>
          <a href="#" className="btn">
            <b>Apply Now</b>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BodyCards;
