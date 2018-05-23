import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { fetchCampuses } from '../reducers/campuses.reducer';
import { connect } from 'react-redux';

//*-----------------     COMPONENT IMPORTS     -----------------*/
import CampusList from './CampusList';
import StudentList from './StudentList';
import NoMatch from './NoMatch';
import Navbar from './Navbar';

//*-----------------     COMPONENT     -----------------*/
class Root extends Component {
  componentDidMount() {
    console.log('THIS FETCHCAMPUS LIST', this.props.fetchCampusList);
    this.props.fetchCampusList();
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <br />
          <Switch>
            <Redirect exact path="/" to="/campuses" />
            <Route exact path="/campuses" component={CampusList} />
            <Route exact path="/students" component={StudentList} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */
const mapDispatch = dispatch => {
  return {
    fetchCampusList: () => dispatch(fetchCampuses()),
  };
};
export default connect(null, mapDispatch)(Root);
