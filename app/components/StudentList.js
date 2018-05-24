import React from 'react';
import { connect } from 'react-redux';

import SingleStudent from './SingleStudent';

const StudentList = props => {
  const { students } = props;
  return (
    <div>
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

const mapState = state => {
  return {
    students: state.students,
  };
};

export default connect(mapState)(StudentList);
