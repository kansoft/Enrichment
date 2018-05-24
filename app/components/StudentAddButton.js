import React from 'react';
import { Link } from 'react-router-dom';

//*-----------------     COMPONENT     -----------------*/
const StudentAddButton = () => {
  return (
    <div>
      <button className="smallbutton" type="button">
        <Link to="/students/studentForm">Add Student</Link>
      </button>
    </div>
  );
};

export default StudentAddButton;
