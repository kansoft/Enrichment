import React from 'react';
import { Link } from 'react-router-dom';

//*-----------------     COMPONENT     -----------------*/
const CampusAddButton = () => {
  return (
    <div>
      <button className="smallbutton" type="button">
        <Link to="/campuses/campusForm">Add Campus</Link>
      </button>
    </div>
  );
};

export default CampusAddButton;
