import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleStudent from './SingleStudent';

const CampusDetail = props => {
  const selectedCampus = props.selectedCampus;
  console.log(selectedCampus.students.map(student => student));
  return (
    <div>
      <div>
        <div className="campus-list">
          <img src={selectedCampus.imageUrl} />
        </div>
        <h1>{selectedCampus.name}</h1>
        <br />
        <p>{selectedCampus.description} </p>
        <br />
        <h4>{selectedCampus.address} </h4>
      </div>
      <br />
      <div>
        <h2> Students on campus </h2>
        <br />
        <div>
          <ul>
            {selectedCampus.students.map(student => (
              <SingleStudent student={student} key={student.id} />
            ))}
            {/* <SingleStudent student={student} key={student.id} /> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const findCampus = state.campuses.list.find(campus => campus.id === id);
  return {
    selectedCampus: findCampus,
    // selectedStudent: state.student.list.find(
    //   student => findCampus.student.id === student.id
    // ),
  };
};

export default connect(mapState)(CampusDetail);
