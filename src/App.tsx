import { useState } from "react";

import Scoreboard from "./components/Scoreboard/Scoreboard";
import Game from "./components/Game/Game";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  return (
    <div className='app'>
      <Scoreboard score={score} />
      <Game setScore={setScore} score={score} />
      <div className='rule-btn-wrapper'>
        <button className='btn' onClick={() => setIsModalOpen(true)}>
          Rules
        </button>
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default App;
