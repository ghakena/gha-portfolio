import React from 'react';
import '../App.css';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Akena Gibbs Herbert</h1>
        <Typed 
          className="typed-text"
          strings={["Web Design", "Web Development", "Data Science"]}
          typeSpeed={100}
          backDelay={30}
          backSpeed={60}
          loop
        />
        <Link to="#" className="main-btn">Contact Me</Link>
      </div>
    </div>
  )
}

export default Header;