import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav class="topnav" id="myTopnav">
      <ul class="menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/article">Article</Link>
        </li>

        <li>
          <Link to="/practice">Flashcards</Link>
        </li>

        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
