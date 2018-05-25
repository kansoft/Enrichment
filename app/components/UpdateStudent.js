import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

//*-----------------     COMPONENT IMPORTS     -----------------*/
import StudentForm from './StudentForm';
import { updateStudent } from '../reducers/students.reducer';

//*-----------------     Default state     -----------------*/
const defaultState = {
  firstName: '',
  lastName: '',
  email: '',
  imageUrl: '',
  gpa: null,
  campusId: null,
};

//*-----------------     CLASS COMPONENT     -----------------*/

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  componentDidMount() {
    const student = this.props.student;
    this.setState({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      imageUrl: student.imageUrl,
      gpa: student.gpa,
      campusId: student.campusId,
    });
  }

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

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    student: state.students.list.find(student => student.id === id),
  };
};

const mapDispatch = (dispatch, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    updateStudent: student => dispatch(updateStudent(id, student, ownProps)),
  };
};

export default withRouter(connect(null, mapDispatch)(UpdateStudent));
