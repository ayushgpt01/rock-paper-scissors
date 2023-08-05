import { useState, useEffect } from "react";

import Default from "../../game-states/Default/Default";
import Selection from "../../game-states/Selection/Selection";

import "./style.css";

export enum Selections {
  "rock" = "rock",
  "scissor" = "scissor",
  "paper" = "paper",
  "none" = "",
}

const findResult = (player: string, house: string): string => {
  if (!player || !house) {
    return "";
  }
  if (
    (player === Selections.rock && house === Selections.scissor) ||
    (player === Selections.scissor && house === Selections.paper) ||
    (player === Selections.paper && house === Selections.rock)
  ) {
    return "player";
  }
  if (
    (house === Selections.rock && player === Selections.scissor) ||
    (house === Selections.scissor && player === Selections.paper) ||
    (house === Selections.paper && player === Selections.rock)
  ) {
    return "house";
  }
  return "tie";
};

const Game = ({
  score,
  setScore,
}: {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [gameStart, setGameStart] = useState<boolean>(false);
  const [playerSelection, setPlayerSelection] = useState<Selections>(
    Selections.none
  );
  const [houseSelection, setHouseSelection] = useState<Selections>(
    Selections.none
  );

  useEffect(() => {
    const s = [Selections.rock, Selections.paper, Selections.scissor];
    setHouseSelection(s[Math.floor(Math.random() * s.length)]);
  }, [playerSelection]);

  return (
    <div className='game-container'>
      {gameStart ? (
        <Selection
          houseSelected={houseSelection}
          playerSelected={playerSelection}
          setGameStart={setGameStart}
          winner={findResult(playerSelection, houseSelection)}
          score={score}
          setScore={setScore}
        />
      ) : (
        <Default
          setGameStart={setGameStart}
          setPlayerSelection={setPlayerSelection}
        />
      )}
    </div>
  );
};

export default Game;
