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
        <div className="nav-item">
          <Link to="/campuses">Campus</Link>
        </div>
        <div className="nav-item">
          <Link to="/students">Students</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
