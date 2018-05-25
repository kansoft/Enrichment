import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//*-----------------     COMPONENT IMPORTS     -----------------*/
import CampusForm from './CampusForm';
import { updateCampus } from '../reducers/campuses.reducer';

//*-----------------     Default state     -----------------*/

const defaultState = {
  name: '',
  address: '',
  description: '',
  imageUrl: ' ',
  warningMessage: '',
};

//*-----------------     CLASS COMPONENT     -----------------*/

class UpdateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = props.student;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
  }

  //*-----------------     LIFECYCYLE HOOKS     -----------------*/
  componentDidMount() {
    const { campus } = this.props;
    this.setState({
      name: campus.name,
      address: campus.address,
      imageUrl: campus.imageUrl,
      warningMessage: 'Field is required!',
    });
  }

  //*-----------------     Event Handlers     -----------------*/
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateCampus({
      name: this.state.name,
      address: this.state.address,
      imageUrl: this.state.imageUrl,
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
        <CampusForm
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
    campus: state.campuses.list.find(campus => campus.id === id),
  };
};

const mapDispatch = (dispatch, ownProps) => {
  const id = +ownProps.match.params.id;
  return {
    updateCampus: student => dispatch(updateCampus(id, student, ownProps)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(UpdateCampus));
