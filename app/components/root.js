import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

//*-----------------     THUNK IMPORTS     -----------------*/
import { fetchCampuses } from '../reducers/campuses.reducer';
import { fetchStudents } from '../reducers/students.reducer';

//*-----------------     COMPONENT IMPORTS     -----------------*/
import HomePage from './HomePage';
import NoMatch from './NoMatch';
import CampusList from './CampusList';
import StudentList from './StudentList';
import Navbar from './Navbar';
import StudentDetail from './StudentDetail';
import CampusDetail from './CampusDetail';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';

//*-----------------     COMPONENT     -----------------*/
class Root extends Component {
  componentDidMount() {
    this.props.fetchCampusList();
    this.props.fetchStudentList();
  }
  render() {
    const { isFetching } = this.props;
    if (!isFetching) {
      return <div className="loader"> Loading</div>;
    }
    return (
      <Router>
        <div>
          <Navbar />
          <br />
          <Switch>
            {/* <Redirect exact path="/" to="/campuses" /> */}
            <Route exact path="/" component={HomePage} />
            <Route exact path="/campuses" component={CampusList} />
            <Route exact path="/students" component={StudentList} />
            <Route exact path="/campuses/campusForm" component={AddCampus} />
            <Route exact path="/students/studentForm" component={AddStudent} />
            <Route exact path="/students/:id" component={StudentDetail} />
            <Route exact path="/campuses/:id" component={CampusDetail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const matchstate = state => {
  const { students, campuses } = state;
  return {
    isFetching: state.students.isFetching || state.campuses.isFetching,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchCampusList: () => dispatch(fetchCampuses()),
    fetchStudentList: () => dispatch(fetchStudents()),
  };
};
export default connect(matchstate, mapDispatch)(Root);
