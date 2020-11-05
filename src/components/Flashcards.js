import React from 'react';

function Flashcards(props) {
  return (
    <div>
      <div class="react-card-flip">
        <div class="react-card-flipper">
          <div class="react-card-front">
            <div class="card-front">
              <div class="chinese">星</div>
            </div>
          </div>
          <div class="react-card-back">
            <div class="card-back">
              <ul>
                <li class="definition">star</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <div></div>
        <button class="reveal-button">
          <span>
            <i class="fas fa-eye" aria-hidden="true"></i> 亮
          </span>
        </button>
        <button class="navigation">
          <i class="fas fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Flashcards;
