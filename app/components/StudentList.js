import React from 'react';
import { connect } from 'react-redux';

import SingleStudent from './SingleStudent';
import StudentAddButton from './StudentAddButton';

//*-----------------     COMPONENT     -----------------*/
const StudentList = props => {
  const { students } = props;
  return (
    <div>
      <div className="campus-button">
        <StudentAddButton />
      </div>
      <ul>
        {students.list.map(student => {
          return (
            <div key={student.id}>
              <SingleStudent student={student} />
              <li>
                <span>{student.campus.name} </span>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

//*-----------------     MAPPING TO STORE     -----------------*/
const mapState = state => {
  return {
    students: state.students,
  };
};

export default connect(mapState)(StudentList);
