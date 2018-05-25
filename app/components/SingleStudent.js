import React from 'react';
import { Link } from 'react-router-dom';

//*-----------------     COMPONENT     -----------------*/
const SingleStudent = props => {
  const { student } = props;
  return (
    <div>
      <li>
        <ul className="student-inline">
          <li>
            <Link to={`/Students/${student.id}`}>
              <img className="student-image" src={student.imageUrl} />
            </Link>
          </li>
          <li>
            <Link to={`/Students/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
            <br />
          </li>
        </ul>
      </li>
    </div>
  );
};

export default SingleStudent;
