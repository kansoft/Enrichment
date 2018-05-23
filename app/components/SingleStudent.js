import React from 'react';
import { Navlink, Link } from 'react-router-dom';

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
            <Link to={`/Campuses/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default SingleStudent;
