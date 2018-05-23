import React from 'react';
import CampusList from './CampusList';
// import Students from './Students';
import { Navlink, Link } from 'react-router-dom';

//*-----------------    COMPONENT     -----------------*/

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" />
        </Link>
        <Link to="/campus" component={CampusList}>
          Campus
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
