import "./Third.css";

interface ThirdProps {
  score: number;
  onSummaryClick: () => void;
}

export const Third: React.FC<ThirdProps> = ({ score, onSummaryClick }) => {
  const percentage = score;

  const greenValue = Math.min(255, Math.floor((percentage / 10) * 255));
  const redValue = 255 - greenValue;

  const textStyle = {
    color: `rgb(${redValue}, ${greenValue}, 0)`,
  };

  return (
    <div className="main-3">
      <div className = "text-3">
        Sustainability Score
      </div>
      <div className = "speed-3">
        <div className = "number-3" style={textStyle}>
          { percentage }
          <div className='bar' style={{backgroundColor: `rgba(${redValue}, ${greenValue}, 0, 0.313)`}}>
            <div className="bar-child" style={{width: (percentage * 10) + "%", backgroundColor: `rgba(${redValue}, ${greenValue}, 0)`}}></div>
          </div>
        </div>
      </div>
      <div className = "button-3">
        <button onClick={() => onSummaryClick()}>Summary</button>
      </div>
    </div>
  );
};