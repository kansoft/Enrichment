import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SingleCampus from './SingleCampus';
import CampusAddButton from './CampusAddButton';

//*-----------------     COMPONENT     -----------------*/
const CampusList = props => {
  const { campuses } = props;
  return (
    <div>
      <div className="campus-button">
        <CampusAddButton />
      </div>

      <ul className="campus-group">
        {campuses.list.map(campus => (
          <SingleCampus campus={campus} key={campus.id} />
        ))}
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

export default connect(mapState)(CampusList);
