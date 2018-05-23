import React from 'react';
import { connect } from 'react-redux';

import SingleStudent from './SingleStudent';

const StudentList = props => {
  const { students } = props;
  return (
    <div>
      <ul>
        {students.map(student => (
          <SingleStudent student={student} key={student.id} />
        ))}
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
