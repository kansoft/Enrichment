import React from 'react';
import { connect } from 'react-redux';

import SingleCampus from './SingleCampus';

const CampusList = props => {
  const { campuses } = props;
  return (
    <div>
      <ul className="campus-group">
        {campuses.map(campus => (
          <SingleCampus campus={campus} key={campus.id} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    campuses: state.campuses,
  };
};

export default connect(mapState)(CampusList);
