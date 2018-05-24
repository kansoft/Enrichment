import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const StudentDetail = props => {
  const selectedStudent = props.selectedStudent;
  const selectedCampus = props.selectedCampus;
  const gpa = selectedStudent.gpa || 'New Student no GPA';
  return (
    <div>
      <div>
        <div className="stdentDetail">
          <img src={selectedStudent.imageUrl} />
        </div>
        <h1>
          {selectedStudent.firstName} {selectedStudent.lastName}
        </h1>
        <br />
        <h4>GAP: {gpa} </h4>
      </div>
      <br />
      <div>
        <h2> This student is registered to a campus </h2>
        <br />
        <div className="studentDetail-campus">
          <img className="campus-image" src={selectedStudent.campus.imageUrl} />
          <Link to={`/Campuses/${selectedStudent.campus.id}`}>
            {selectedStudent.campus.name}
          </Link>
          <br />
          <span>{`${selectedCampus.students.length} students`}</span>
        </div>
      </div>
    </div>
  );
};

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const findStudent = state.students.list.find(student => student.id === id);
  return {
    selectedStudent: findStudent,
    selectedCampus: state.campuses.list.find(
      campus => findStudent.campus.id === campus.id
    ),
  };
};

export default connect(mapState)(StudentDetail);
