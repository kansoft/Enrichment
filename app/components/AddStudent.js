import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../reducers/students.reducer';
import { withRouter } from 'react-router-dom';

//*-----------------     COMPONENT IMPORTS     -----------------*/
import StudentForm from './StudentForm';

//*-----------------     Default state     -----------------*/
const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  campusId: null,
};

//*-----------------     CLASS COMPONENT     -----------------*/
class AddStudent extends Component {
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
    this.props.addStudent({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      campusId: this.state.campusId,
    });
    this.setState(defaultState);
  }

  //*-----------------     Handle submit     -----------------*/

  render() {
    return (
      <div>
        <StudentForm
          {...this.state}
          {...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/
const mapState = state => {
  return {
    campuses: state.campuses,
  };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    addStudent: student => dispatch(addStudent(student, ownProps)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(AddStudent));
