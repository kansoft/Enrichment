import React from 'react';

const CampusSelectForm = props => {
  const { handleChange } = props;
  const campuses = props.campuses.list;
  return (
    <div key={campuses.id}>
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

export default CampusSelectForm;
