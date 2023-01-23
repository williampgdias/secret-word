import './Game.css';

import React from 'react';

const Game = ({ verifyLetter }) => {
  return (
    <div className='game'>
      <p className='score'>Score: 000</p>
      <h1>Guess the word:</h1>
      <h3 className='tip'>
        Tip about the word: <span>Tip...</span>
      </h3>
      <div className='wordContainer'>
        <span className='letter'>A</span>
        <span className='blankSquare'></span>
      </div>
      <div className='letterContainer'>
        <p>Try to guess a letter word:</p>
        <form>
          <input type='text' name='letter' maxLength='1' required />
          <button>Play!</button>
        </form>
      </div>
      <div className='wrongLetterContainer'>
        <p>Letter already used</p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  );
};

export default Game;
