import React from 'react';
import { Navlink, Link } from 'react-router-dom';

const SingleCampus = props => {
  const { campus } = props;
  return (
    <div>
      <li>
        <ul className="list-inline">
          <li>
            <Link to={`/Campuses/${campus.id}`}>
              <img className="campus-image" src={campus.imageUrl} />
            </Link>
          </li>
          <li>
            <Link className="large-font" to={`/Campuses/${campus.id}`}>
              {campus.name}
            </Link>
            <br />
            <span>{`${campus.students.length} students`}</span>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default SingleCampus;
