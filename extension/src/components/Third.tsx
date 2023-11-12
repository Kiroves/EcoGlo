import React from "react";
import "./First.css";

export const First = () => {
  return (
    <div className="main">
      <header>
        <div className="logo">
          ECO
        </div>
        GLO
      </header>
      <div className = "img">
        <img alt = "img_of_beauty_product" src="https://www.sephora.com/productimages/sku/s2536183-main-zoom.jpg?imwidth=315"></img>
      </div>
      <div className = "text">
        <div className = "brand">
          Summer Fridays
        </div>
        <div className = "product">
          Sheer Skin Tint with Hyaluronic Acid + Squalane
        </div>
      </div>
      <div className = "button">
        <button>Analyze</button>
      </div>
    </div>
  );
};