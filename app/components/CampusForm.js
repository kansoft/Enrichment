import React from 'react';

const CampusForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h2>New Campus Form</h2>
      <div className="formCampus">
        <label>
          Name:
          <input
            onChange={props.handleChange}
            value={props.name}
            name="name"
            type="text"
            placeholder="name please..."
          />
        </label>
        <br />
        <label>
          Address:
          <input
            onChange={props.handleChange}
            value={props.address}
            name="address"
            type="text"
            placeholder="location please..."
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            onChange={props.handleChange}
            value={props.description}
            name="description"
            type="text"
            placeholder="tell us more about your campus..."
          />
        </label>
        <br />
        <button
          disabled={!props.name || !props.address}
          className="smallbutton"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CampusForm;