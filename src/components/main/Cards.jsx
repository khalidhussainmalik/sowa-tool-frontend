import React from "react";
import "./Cards.css";
import DrillingL1 from "./images/Drilling-L1.jpg";
import Indexable from "./images/Indexable.jpg";
import Measuring from "./images/Measuring.jpg";
import Milling from "./images/Milling.jpg";
import Threading from "./images/Threading.jpg";
import ToolHolding from "./images/ToolHolding.jpg";
import Workholding from "./images/Workholding.jpg";

function Cards() {
  return (
    <div className="products_categories">
      <h1>Top Product Categories</h1>

      <div className="d-flex">
        <div className="products">
          <img src={DrillingL1} alt="" />
          <p>Drilling & Holemaking</p>
        </div>
        <div className="products">
          <img src={Indexable} alt="" />
          <p>Indexable Cutting Tools</p>
        </div>
        <div className="products">
          <img src={Measuring} alt="" />
          <p>Measuring & Inspecting</p>
        </div>
        <div className="products">
          <img src={Milling} alt="" />
          <p>Milling</p>
        </div>
        <div className="products">
          <img src={Threading} alt="" />
          <p>Threading & Tapping</p>
        </div>
        <div className="products">
          <img src={ToolHolding} alt="" />
          <p>Tool Holding</p>
        </div>
        <div className="products">
          <img src={Workholding} alt="" />
          <p>Workholding, Clamping & Fixturing</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
