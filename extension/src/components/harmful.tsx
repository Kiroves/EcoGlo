// @ts-nocheck

import "./Harmful.css";



interface FourthProps {
    sustainableList: Array<any>;
    unsustainableList: Array<any>;
    score: number;
    imgUrl: string;
}

export const Harmful: React.FC<FourthProps> = ({ sustainableList, unsustainableList, score, imgUrl }) => {
  return (
    unsustainableList.map((sus) => (
        <div className="ing-item" key={sus._name}>
        <strong>{sus._name} ({sus._score})</strong>: {sus._reason}
        </div>
    ))
  );
};