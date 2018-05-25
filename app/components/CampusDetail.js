import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

//*-----------------     Component Import     -----------------*/
import SingleStudent from './SingleStudent';
import StudentAddButton from './StudentAddButton';
import { removeCampus } from '../reducers/campuses.reducer';
import CampusEditDeleteButton from './CampusEdit_DeleteButton';

//*-----------------     CLASS COMPONENT     -----------------*/
class CampusDetail extends Component {
  constructor(props) {
    super(props);
    this.removeCampusCallback = this.removeCampusCallback.bind(this);
  }

  removeCampusCallback() {
    const { removeCampus, selectedCampus } = this.props;
    removeCampus(selectedCampus.id);
  }

  render() {
    const { selectedCampus, removeCampus } = this.props;
    return (
      <div>
        <div className="singleDetail">
          <div className="campus-list">
            <img src={selectedCampus.imageUrl} />
          </div>
          <div className="singleInfo">
            <h1>{selectedCampus.name}</h1>
            <br />
            <p>{selectedCampus.description} </p>
            <br />
            <h4>{selectedCampus.address} </h4>

            <br />
            <CampusEditDeleteButton
              selectedCampus={selectedCampus}
              removeCampusCallback={this.removeCampusCallback}
            />
          </div>
        </div>
        <div className="relatedInfo">
          <h2> Students on campus </h2>
          <div className="campus-button">
            <StudentAddButton />
          </div>
          <div className="singleStudent">
            <ul>
              {selectedCampus.students.map(student => (
                <SingleStudent student={student} key={student.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/
const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const findCampus = state.campuses.list.find(campus => campus.id === id);
  return {
    selectedCampus: findCampus,
  };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    removeCampus: id => {
      dispatch(removeCampus(id, ownProps));
      ownProps.history.push('/campuses');
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(CampusDetail));
