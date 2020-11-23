import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <div className="home">
        <h1>Welcome to Management Mastery</h1>
        <p>
          This website was created as part of a group assignment for a project
          management course. Our goal was to create a useful resource for
          learning and studying project management topics, such as the one we
          explored:{' '}
          <span>
            Essentials of Risk Management: How to Mitigate Risks as a Team
          </span>
        </p>

        <p>
          Here you can read through our risk management article which outlines
          the most important features of the risk management process. Or study
          key concepts about risk management using interactive flashcards.
          Finally, we also provide a quiz to test your knowledge of risk
          management.
        </p>
        <p>To get started, select an option:</p>

        <div className="actions">
          <Link to="/article">
            Article
            <i className="fas fa-newspaper" aria-hidden="true"></i>
          </Link>

          <Link to="/practice">
            Flashcards
            <i className="fas fa-graduation-cap" aria-hidden="true"></i>
          </Link>

          <Link to="/quiz">
            Quiz
            <i className="fas fa-feather-alt" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
