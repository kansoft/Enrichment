import React from 'react';
import { Link } from 'react-router-dom';

//*-----------------     COMPONENT     -----------------*/
const NoMatch = () => {
  return (
    <div id="notFound404">
      <h2>Looks like this page doesn't exist!</h2>
      <br />

      <button className="button" type="button">
        <Link to="/">Go Home!</Link>
      </button>
      <br />
      <img src="/404.gif" style={{ width: '80%' }} />
    </div>
  );
};

export default NoMatch;
