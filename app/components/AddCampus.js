import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../reducers/campuses.reducer';
import { withRouter } from 'react-router-dom';

//*-----------------     COMPONENT IMPORTS     -----------------*/
import CampusForm from './CampusForm';

//*-----------------     Default state     -----------------*/
const defaultState = {
  name: '',
  address: '',
  description: '',
  imageUrl: ' ',
  //   'https://s-media-cache-ak0.pinimg.com/originals/53/0f/e3/530fe38e8bef56d41990f5294d49dc3c.jpg',
};

//*-----------------     CLASS COMPONENT     -----------------*/
class AddCampus extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
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
      imageUrl: this.state.imageUrl,
    });
    this.setState(defaultState);
  }

  fileChangedHandler = evt => {
    this.setState({ imageUrl: evt.target.files[0] });
  };

  //*-----------------     Handle submit     -----------------*/

  render() {
    return (
      <div>
        <CampusForm
          {...this.props}
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          fileChangedHandler={this.fileChangedHandler}
        />
      </div>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/

const mapDispatch = (dispatch, ownProps) => {
  return {
    addCampus: campus => dispatch(addCampus(campus, ownProps)),
  };
};

export default withRouter(connect(null, mapDispatch)(AddCampus));
