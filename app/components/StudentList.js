import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SingleStudent from './SingleStudent';
import StudentAddButton from './StudentAddButton';

//*-----------------     COMPONENT     -----------------*/
const StudentList = props => {
  const { students } = props;
  const noCampus = 'No campus selected';
  return (
    <div>
      <div className="campus-button">
        <StudentAddButton />
      </div>
      <ul>
        {students.list &&
          students.list.map(student => {
            return (
              <div key={student.id}>
                <SingleStudent student={student} />
                <li>
                  <span>{student.campus ? student.campus.name : noCampus}</span>
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

export default withRouter(connect(mapState)(StudentList));
