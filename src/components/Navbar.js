import React from 'react'
import { Link } from 'react-router-dom';
// font-awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand" to="#">rokku</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">How I Work</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;