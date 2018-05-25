import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  gpa: 0.0,
  campusId: null,
  warningMessage: '',
};

//*-----------------     CLASS COMPONENT     -----------------*/

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = props.student;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
  }

  //*-----------------     LIFECYCYLE HOOKS     -----------------*/
  componentDidMount() {
    const { student } = this.props;
    this.setState({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      imageUrl: student.imageUrl,
      gpa: student.gpa,
      campusId: student.campusId,
      warningMessage: 'Field is required!',
    });
  }

  // componentWillReceiveProps(nextProps, oldProps) {
  //   if (newProps.student !== oldProps.student) {
  //     this.setState({
  //       student: newProps.student,
  //     });
  //   }
  // }

  //*-----------------     Event Handlers     -----------------*/
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateStudent({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
      campusId: this.state.campusId,
    });
    this.setState(defaultState);
  }

  fileChangedHandler = evt => {
    this.setState({ imageUrl: evt.target.files[0] });
  };

  //*-----------------     Render     -----------------*/
  render() {
    return (
      <div>
        <StudentForm
          {...this.state}
          {...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          fileChangedHandler={this.fileChangedHandler}
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

export default withRouter(connect(mapState, mapDispatch)(UpdateStudent));

// static getDerivedStateFromProps(nextProps, prevState) {
//   if (nextProps.student !== prevState.student) {
//     return {
//       student: nextProps.student,
//     };
//   }
//   return null;
// }
