import React from 'react';
import CampusList from './CampusList';
import StudentList from './StudentList';
import { Navlink, Link } from 'react-router-dom';

//*-----------------    COMPONENT     -----------------*/

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" />
        </Link>
        <ul>
          <li>
            <Link to="/campuses" component={CampusList}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="/students" component={StudentList}>
              Students
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
