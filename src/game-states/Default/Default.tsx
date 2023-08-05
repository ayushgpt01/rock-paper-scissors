import Token from "../../components/Token/Token";
import { Selections } from "../../components/Game/Game";
import "./style.css";

const Default = ({
  setGameStart,
  setPlayerSelection,
}: {
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerSelection: React.Dispatch<React.SetStateAction<Selections>>;
}) => {
  return (
    <div className='default-state-container'>
      <div className='top-row'>
        <div
          onClick={() => {
            setPlayerSelection(Selections.paper);
            setGameStart(true);
          }}
        >
          <Token name='paper' isWon={false} />
        </div>
        <div
          onClick={() => {
            setPlayerSelection(Selections.scissor);
            setGameStart(true);
          }}
        >
          <Token name='scissor' isWon={false} />
        </div>
      </div>
      <div className='bottom-row'>
        <div
          onClick={() => {
            setPlayerSelection(Selections.rock);
            setGameStart(true);
          }}
        >
          <Token name='rock' isWon={false} />
        </div>
      </div>
    </div>
  );
};

export default Default;
