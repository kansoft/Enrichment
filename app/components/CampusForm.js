import React from 'react';

const CampusForm = props => {
  const image = props.imageUrl
    ? props.imageUrl
    : 'https://www.chefbakers.com/userfiles/pin_photo62522.jpg';
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="formCampus">
        <h2>New Campus Form</h2>
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
        <br />
        <img className="student-image" src={image} width={150} height={150} />
        <input type="file" onChange={props.fileChangedHandler} />
        <br />
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
