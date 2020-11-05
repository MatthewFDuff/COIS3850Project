import React from 'react';

function Article(props) {
  return (
    <div>
      <div className="home">
        <h3 className="title ">
          Welcome to the unofficial study app for the Intro to Chinese course.
        </h3>
        {/* <br /> */}
        <p className="">
          Currently there are three ways to study, but I'm hoping to add more
          and keep the content updated based on our progress in the course.
        </p>
        <p className="">
          <span className="title">
            <i className="fas fa-bars" aria-hidden="true"></i> List View
          </span>
          {/* <br /> */}
          The list view is best for memorizing definitions, which can then be
          tested using the flashcard page.
        </p>
        <p className="">
          <span className="title">
            <i className="fas fa-th" aria-hidden="true"></i> Grid View
          </span>
          {/* <br /> */}
          The grid view is best for memorizing what each character's pinyin is.
          It shows a grid of all the characters we're learning. By hovering over
          a character, the associated pinyin will be revealed. Each character
          can be clicked on to view more information, such as how it is written.
        </p>
        <p className="">
          <span className="title">
            <i className="fas fa-layer-group" aria-hidden="true"></i> Flashcards
          </span>
          {/* <br /> */}
          The flashcard section is best for testing which definitions you need
          to work on. The order of words/characters is randomized each time you
          load it. You can toggle the pinyin to display on the front of the card
          to change the difficulty based on your skill level.
        </p>
        <h3 className="title">
          If you find a mistake, have questions or suggestions, contact me at
          matthewduff@trentu.ca
        </h3>
        <h3 className="important title">
          If you're having any issues with the audio, try Firefox or Edge.
        </h3>
        <h2 className="donate title">
          If you found this app helpful for learning the course material,
          consider donating to help support future development and the cost of
          web hosting. Thank you!
        </h2>
        <a
          className="donate kofi-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://ko-fi.com/matthewduff"
        >
          Support me on ko-fi
        </a>
      </div>
    </div>
  );
}

export default Article;
