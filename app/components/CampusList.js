import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*-----------------     Component Import     -----------------*/
import SingleCampus from './SingleCampus';
import CampusAddButton from './CampusAddButton';

//*-----------------     COMPONENT     -----------------*/
const CampusList = props => {
  const { campuses } = props;
  const noCampuses = 'There are no campuses registered in the database';
  return (
    <div className="studentList">
      <h2>Campus List:</h2>
      <div className="campus-button">
        <CampusAddButton />
      </div>

      <ul className="campus-group">
        {campuses.list.length
          ? campuses.list.map(campus => (
              <SingleCampus campus={campus} key={campus.id} />
            ))
          : noCampuses}
      </ul>
    </div>
  );
};

//*-----------------     MAPPING TO STORE     -----------------*/
const mapState = state => {
  return {
    campuses: state.campuses,
  };
};

export default withRouter(connect(mapState)(CampusList));
