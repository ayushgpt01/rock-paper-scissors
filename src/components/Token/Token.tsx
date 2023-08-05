import { ReactComponent as Paper } from "../../assets/icon-paper.svg";
import { ReactComponent as Rock } from "../../assets/icon-rock.svg";
import { ReactComponent as Scissors } from "../../assets/icon-scissors.svg";

import "./style.css";

enum tokenColors {
  "scissor" = "--scissors-color",
  "rock" = "--rock-color",
  "paper" = "--paper-color",
}

const Token = ({ name, isWon }: { name: string; isWon: boolean }) => {
  const borderColor =
    Object.values(tokenColors)[Object.keys(tokenColors).indexOf(name)];
  return (
    <div
      className={`token ${isWon ? "won" : ""}`}
      style={{ borderColor: `var(${borderColor})` }}
    >
      {name === "rock" ? <Rock /> : name === "paper" ? <Paper /> : <Scissors />}
    </div>
  );
};

export default Token;
