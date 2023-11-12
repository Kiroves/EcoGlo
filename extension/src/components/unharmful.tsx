// @ts-nocheck

import "./unharmful.css";



interface unharmfulProps {
    sustainableList: Array<any>;
    unsustainableList: Array<any>;
    score: number;
    imgUrl: string;
}

export const Unharmful: React.FC<unharmfulProps> = ({ sustainableList, unsustainableList, score, imgUrl }) => {
  return (
    sustainableList.map((sus) => (
        <div className="ing-item" key={sus._name}>
        <strong>{sus._name} ({sus._score})</strong>: {sus._reason}
        </div>
    ))
  );
};