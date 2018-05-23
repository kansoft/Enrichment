import React from 'react';
import { connect } from 'react-redux';

const CampusList = props => {
  const { campuses } = props;
  return (
    <div>
      {/* <h1>Hello World!</h1> */}
      <ul>
        {campuses.map(campus => {
          return <li key={campus.id}>{campus.name}</li>;
        })}
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
