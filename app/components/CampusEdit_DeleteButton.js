import React from 'react';
import { Link } from 'react-router-dom';

//*-----------------     COMPONENT     -----------------*/

const CampusEditDeleteButton = props => {
  const { selectedCampus, removeCampusCallback } = props;
  return (
    <div>
      <button className="editButton" type="button">
        <Link
          to={`/campuses/campusForm/${selectedCampus.id}`}
          className="editButton-link"
        >
          Edit
        </Link>
      </button>
      <button
        className="deleteButton"
        type="button"
        onClick={removeCampusCallback}
      >
        Delete
      </button>
    </div>
  );
};

export default CampusEditDeleteButton;
