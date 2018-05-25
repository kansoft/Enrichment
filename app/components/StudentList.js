import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SingleStudent from './SingleStudent';
import StudentAddButton from './StudentAddButton';

//*-----------------     COMPONENT     -----------------*/
const StudentList = props => {
  const { students } = props;
  const noCampus = 'No campus selected';
  const noStudents = 'There are no students registered in the database';
  return (
    <div className="studentList">
      <h2>Student List:</h2>
      <div className="campus-button">
        <StudentAddButton />
      </div>
      <div className="singleStudent">
        <ul>
          {students.list.length
            ? students.list.map(student => {
                return (
                  <div key={student.id}>
                    <SingleStudent student={student} />
                    <li>
                      <span className='student_campus'>
                        Campus:
                        {student.campus ? student.campus.name : noCampus}
                      </span>
                    </li>
                  </div>
                );
              })
            : noStudents}
        </ul>
      </div>
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
