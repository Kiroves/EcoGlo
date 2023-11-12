import React from "react";
import "./First.css";

export const First = () => {
  return (
    <div className="a">
      <div className="div">
        <div className="rectangle" />
        <div className="overlap-group">
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="overlap">
            <div className="text-wrapper">Analyze</div>
          </div>
        </div>
      </div>
    </div>
  );
};