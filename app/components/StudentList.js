import React from 'react';
import { connect } from 'react-redux';

const StudentList = props => {
  const { students } = props;
  return (
    <div>
      {/* <h1>Hello World!</h1> */}
      <ul>
        {students.map(student => {
          return <li key={student.id}>{student.name}</li>;
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
