import React from 'react';
import { Link } from 'react-router-dom';

//*-----------------     COMPONENT     -----------------*/
const SingleStudent = props => {
  const { student } = props;
  return (
    <div>
      <li>
        <div className="student-profile">
          <span>
            <Link to={`/Students/${student.id}`}>
              <img className="headshot" src={student.imageUrl} />
            </Link>
          </span>
          <div className="student-name">
            <Link to={`/Students/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
            <br />
          </div>
        </div>
      </li>
    </div>
  );
};

export default SingleStudent;
