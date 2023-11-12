import React from "react";
import "./Fourth.css";

interface FourthProps {
    sustainableList: Array<any>;
    unsustainableList: Array<any>;
    score: number;
    imgUrl: string;
}

export const Fourth: React.FC<FourthProps> = ({ sustainableList, unsustainableList, score, imgUrl }) => {
  return (
    <div className="main-4">
        <div className = "heading">
            <header>
            <div className="logo-4">
            ECO
            </div>
            GLO
            </header>
        </div>
        <div className="main-container">
            <div className="upper-container">
                <div className="image-4">
                    <img className="image-4-1"alt = "img_of_beauty_product" src={imgUrl}></img>
                </div>
                <div className="score-4">
                   <div className="score">{ score }</div>
                   <div className="subtitle">Sustainability Score</div>
                </div>
            </div>
            <div className="line">
            </div>
            <div className="lower-container">
                <div className="product-description">
                        <h3>Good Ingredients:</h3>

                        { sustainableList.map((sus) => {
                            return <div className="ing-item" key={sus._name}>{sus._name} ({sus._score}): {sus._reason}</div>
                        }) }

                        <h3>Bad Ingredients:</h3>
                        
                        { unsustainableList.map((sus) => {
                            return <div className="ing-item" key={sus._name}>{sus._name} ({sus._score}): {sus._reason}</div>
                        }) }
                </div>
            </div>
        </div>
    </div>
  );
};