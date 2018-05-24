import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../reducers/campuses.reducer';

//*-----------------     Default state     -----------------*/
const defaultState = {
  name: '',
  address: '',
  description: '',
};

//*-----------------     CLASS COMPONENT     -----------------*/
class CampusForm extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //*-----------------     Handle change     -----------------*/
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addCampus({
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
    });
    this.setState(defaultState);
  }

  //*-----------------     Handle submit     -----------------*/

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formCampus">
          <label>
            Name:
            <input
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              type="text"
              placeholder="name please..."
            />
          </label>
          <br />
          <label>
            Address:
            <input
              onChange={this.handleChange}
              value={this.state.address}
              name="address"
              type="text"
              placeholder="location please..."
            />
          </label>
          <br />
          <label>
            Description:
            <input
              onChange={this.handleChange}
              value={this.state.description}
              name="description"
              type="text"
              placeholder="tell us more about your campus..."
            />
          </label>
          <br />
          <button className="smallbutton" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/

const mapDispatch = dispatch => {
  return {
    addCampus: campus => dispatch(addCampus(campus)),
  };
};

export default connect(null, mapDispatch)(CampusForm);
