import './Game.css';

import React from 'react';

const Game = ({ verifyLetter }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>End the game</button>
    </div>
  );
};

export default Game;
