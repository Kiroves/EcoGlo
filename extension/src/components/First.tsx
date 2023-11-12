import React from "react";
import "./First.css";
interface FirstProps {
  onAnalyzeClick: () => void;
  productName: string;
  brandName: string;
  imgUrl: string;
}

export const First: React.FC<FirstProps> = ({ onAnalyzeClick, productName, brandName, imgUrl  }) => {
  return (
    <div className="main">
      <header className="header-1">
        <div className="logo">
          ECO
        </div>
        GLO
      </header>
      <div className = "img">
        <img alt = "img_of_beauty_product" src={imgUrl}></img>
      </div>
      <div className = "text">
        <div className = "brand">
          { brandName }
        </div>
        <div className = "product">
          { productName }
        </div>
      </div>
      <div className = "button">
      <button onClick={() => onAnalyzeClick()}>Analyze</button>
      </div>
    </div>
  );
};