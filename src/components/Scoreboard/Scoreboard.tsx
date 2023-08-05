import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./style.css";

const Scoreboard = ({ score }: { score: number }) => {
  return (
    <div className='scoreboard-container'>
      <Logo />
      <div className='score-container'>
        <span className='score-title'>Score</span>
        <span className='score'>{score}</span>
      </div>
    </div>
  );
};

export default Scoreboard;
