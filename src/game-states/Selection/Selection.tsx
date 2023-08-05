import { useEffect, useState } from "react";

import Token from "../../components/Token/Token";
import "./style.css";

const Selection = ({
  playerSelected,
  houseSelected,
  winner,
  score,
  setScore,
  setGameStart,
}: {
  houseSelected: string;
  playerSelected: string;
  winner: string;
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [houseSelection, setHouseSelection] = useState<string>("");
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    const HouseSelectionTimer = setTimeout(() => {
      setHouseSelection(houseSelected);
    }, 1000);
    const resultTimer = setTimeout(() => {
      setResult(winner);
      if (winner === "player") {
        setScore(score + 1);
      }
    }, 1500);
    return () => {
      clearTimeout(HouseSelectionTimer);
      clearTimeout(resultTimer);
    };
  }, []);

  return (
    <div className='selection-state-container'>
      <div className='pick-box'>
        <span className='pick-box-heading'>You Picked</span>
        <Token name={playerSelected} isWon={result === "player"} />
      </div>
      {result ? (
        <div className='result'>
          <span className='result-heading'>
            You{" "}
            {result === "player"
              ? "Won"
              : result === "house"
              ? "Lose"
              : result === "tie"
              ? "Tied"
              : ""}
          </span>
          <button
            className='play-again-btn btn'
            onClick={() => setGameStart(false)}
          >
            Play again
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className='pick-box'>
        <span className='pick-box-heading'>The House Picked</span>
        {houseSelection ? (
          <Token name={houseSelection} isWon={result === "house"} />
        ) : (
          <div className='empty-box'></div>
        )}
      </div>
    </div>
  );
};

export default Selection;
