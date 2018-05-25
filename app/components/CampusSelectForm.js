import React from 'react';
import { connect } from 'react-redux';

const CampusSelectForm = props => {
  const { handleChange } = props;
  const campuses = props.campuses.list;
  return (
    <div className="formCampus" key={campuses.id}>
      <label>Campus:</label>
      <br />
      <select onChange={handleChange} name="campusId">
        <option value="null">Select campus...</option>
        {campuses.map(campus => (
          <option value={campus.id} key={campus.id}>
            {campus.name}
          </option>
        ))}
      </select>
      <br />
      <br />
    </div>
  );
};

const mapState = state => {
  return {
    campuses: state.campuses,
  };
};
export default connect(mapState)(CampusSelectForm);
