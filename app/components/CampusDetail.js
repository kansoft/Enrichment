import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SingleStudent from './SingleStudent';
import StudentAddButton from './StudentAddButton';

//*-----------------     COMPONENT     -----------------*/
const CampusDetail = props => {
  const selectedCampus = props.selectedCampus;
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
        <div className="campus-button">
          <StudentAddButton />
        </div>
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

//*-----------------     MAPPING TO STORE     -----------------*/
const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const findCampus = state.campuses.list.find(campus => campus.id === id);
  return {
    selectedCampus: findCampus,
  };
};

export default withRouter(connect(mapState)(CampusDetail));
