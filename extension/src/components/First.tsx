import React from "react";
import "./First.css";
interface FirstProps {
  onAnalyzeClick: () => void;
}

export const First: React.FC<FirstProps> = ({ onAnalyzeClick }) => {
  return (
    <div className="main">
      <header className="header-1">
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
      <button onClick={() => onAnalyzeClick()}>Analyze</button>
      </div>
    </div>
  );
};