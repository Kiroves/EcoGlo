import React, { useState } from "react";
import { Harmful } from "./harmful";
import { Unharmful } from "./unharmful";
import "./Fourth.css";



interface FourthProps {
    sustainableList: Array<any>;
    unsustainableList: Array<any>;
    score: number;
    imgUrl: string;
}

export const Fourth: React.FC<FourthProps> = ({ sustainableList, unsustainableList, score, imgUrl }) => {
    const [isHarmful, setIsHarmful] = useState(false);

    const handleButtonClick = () => {
        setIsHarmful(!isHarmful);
    };
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
                <div className="tabs">
                    {isHarmful
                        ? <>
                        <button onClick={() => handleButtonClick()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path d="M1.76135 3.79688C-0.584243 6.35626 -0.584243 10.5 1.74416 13.0594C3.00717 9.87189 5.25825 7.20939 8.0678 5.62501C5.68784 7.81876 4.02102 10.8844 3.43677 14.3625C5.67066 15.5156 8.42007 15.0938 10.2673 13.0781C13.2573 9.81564 13.747 0 13.747 0C13.747 0 4.75133 0.534376 1.76135 3.79688Z" fill="white"/>
                            </svg>Eco-Friendly
                        </button>
                        <button className= "selected">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none">
                            <g clip-path="url(#clip0_16_105)">
                            <path d="M7.34091 4C3.89091 4 1.09091 7.36 1.09091 11.5C1.09091 15.64 3.89091 19 7.34091 19C10.7909 19 13.5909 15.64 13.5909 11.5C13.5909 7.36 10.7909 4 7.34091 4ZM7.34091 17.5C4.57841 17.5 2.34091 14.815 2.34091 11.5C2.34091 10.1125 2.73466 8.8375 3.39716 7.825L10.4034 16.2325C9.55966 17.0275 8.49716 17.5 7.34091 17.5ZM11.2847 15.175L4.27841 6.7675C5.12216 5.9725 6.18466 5.5 7.34091 5.5C10.1034 5.5 12.3409 8.185 12.3409 11.5C12.3409 12.8875 11.9472 14.1625 11.2847 15.175Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_16_105">
                            <rect width="14" height="18" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>Harmful
                        </button>
                        </>
                        : <>
                        <button className= "selected">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                            <path d="M1.76135 3.79688C-0.584243 6.35626 -0.584243 10.5 1.74416 13.0594C3.00717 9.87189 5.25825 7.20939 8.0678 5.62501C5.68784 7.81876 4.02102 10.8844 3.43677 14.3625C5.67066 15.5156 8.42007 15.0938 10.2673 13.0781C13.2573 9.81564 13.747 0 13.747 0C13.747 0 4.75133 0.534376 1.76135 3.79688Z" fill="white"/>
                            </svg>Eco-Friendly
                        </button>
                        <button onClick={() => handleButtonClick()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="19" viewBox="0 0 14 19" fill="none">
                            <g clip-path="url(#clip0_16_105)">
                            <path d="M7.34091 4C3.89091 4 1.09091 7.36 1.09091 11.5C1.09091 15.64 3.89091 19 7.34091 19C10.7909 19 13.5909 15.64 13.5909 11.5C13.5909 7.36 10.7909 4 7.34091 4ZM7.34091 17.5C4.57841 17.5 2.34091 14.815 2.34091 11.5C2.34091 10.1125 2.73466 8.8375 3.39716 7.825L10.4034 16.2325C9.55966 17.0275 8.49716 17.5 7.34091 17.5ZM11.2847 15.175L4.27841 6.7675C5.12216 5.9725 6.18466 5.5 7.34091 5.5C10.1034 5.5 12.3409 8.185 12.3409 11.5C12.3409 12.8875 11.9472 14.1625 11.2847 15.175Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_16_105">
                            <rect width="14" height="19" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>Harmful
                        </button>
                        </>}
                </div>
                <div className = "outerlowercontainer">
                    <div className="product-description">
                        {isHarmful
                        ? <Harmful sustainableList = {sustainableList} unsustainableList={unsustainableList} score = {score} imgUrl={imgUrl}/>
                        : <Unharmful sustainableList = {sustainableList} unsustainableList={unsustainableList} score = {score} imgUrl={imgUrl}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};