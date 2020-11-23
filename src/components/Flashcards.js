import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import { flashcards } from '../flashcards.js';

function Flashcards() {
  const [isFlipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    setFlipped(!isFlipped);
  }

  function next() {
    setFlipped(false);
    if (index < flashcards.length - 1) {
      setIndex(index + 1);
    }
  }

  function previous() {
    setFlipped(false);
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  return (
    <div className="practice">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="react-card-front" onClick={handleClick}>
          <div className="card-front">
            <div className="word">{flashcards[index].front}</div>
          </div>
        </div>

        <div className="react-card-back" onClick={handleClick}>
          <div className="card-back">
            <div className="definition">{flashcards[index].back}</div>
          </div>
        </div>
      </ReactCardFlip>

      <div className="controls">
        {index > 0 && (
          <button className="navigation" onClick={previous}>
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
          </button>
        )}
        <button className="reveal-definition" onClick={handleClick}>
          <span>
            <i className="fas fa-eye" aria-hidden="true"></i>
          </span>
        </button>
        {index < flashcards.length - 1 && (
          <button className="navigation" onClick={next}>
            <i className="fas fa-arrow-right" aria-hidden="true"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default Flashcards;
