import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2> Welcome to Hello World</h2>
      <br />
      <p>
        Here we teach you how to live your life and code. Enjoy some programming
        humor and when you are done checkout our amazing campus locations and
        amazing students studying here.
      </p>
      <br />
      <p>“You shall not pass by reference”, said Gandalf to James Gosling.</p>
      <br />
      <span>
        <button className="button" type="button">
          <Link to="/campuses">Campus</Link>
        </button>
      </span>
      <span>
        <button className="button" type="button">
          <Link to="/students">Students</Link>
        </button>
      </span>
    </div>
  );
};

export default HomePage;
