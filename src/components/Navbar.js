import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navigation">
      <ul className="menu">
        <li>
          <Link to="/">
            <i className="fas fa-home" aria-hidden="true"></i>
          </Link>
        </li>
        <li>
          <Link to="/article">
            <i className="fas fa-newspaper" aria-hidden="true"></i>
          </Link>
        </li>

        <li>
          <Link to="/practice">
            <i className="fas fa-graduation-cap" aria-hidden="true"></i>
          </Link>
        </li>

        <li>
          <Link to="/quiz">
            <i className="fas fa-feather-alt" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
