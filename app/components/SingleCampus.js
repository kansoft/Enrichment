import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CampusEditDeleteButton from './CampusEdit_DeleteButton';
import { removeCampus } from '../reducers/campuses.reducer';

//*-----------------     COMPONENT     -----------------*/
class SingleCampus extends Component {
  constructor(props) {
    super(props);
    this.removeCampusCallback = this.removeCampusCallback.bind(this);
  }

  removeCampusCallback() {
    const { removeCampus } = this.props;

    removeCampus(this.props.campus.id);
  }

  render() {
    const { campus } = this.props;
    return (
      <div>
        <li>
          <ul className="list-inline">
            <li>
              <Link to={`/Campuses/${campus.id}`}>
                <img className="campus-image" src={campus.imageUrl} />
              </Link>
            </li>
            <li>
              <Link className="large-font" to={`/Campuses/${campus.id}`}>
                {campus.name}
              </Link>
              <br />
              <span>{`${campus.students.length} students`}</span>
              <br />
              <CampusEditDeleteButton
                selectedCampus={campus}
                removeCampusCallback={this.removeCampusCallback}
              />
            </li>
            {/* <br /> */}
          </ul>
        </li>
      </div>
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    removeCampus: id => {
      dispatch(removeCampus(id, ownProps));
      ownProps.history.push('/campuses');
    },
  };
};
export default withRouter(connect(null, mapDispatch)(SingleCampus));
