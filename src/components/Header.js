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
        {/* social links */}
        <div className="row social-links">
        <Link 
          to={{ pathname: "https://www.twitter.com/gh_akena" }} 
          className="fa fa-twitter" target="_blank"
        >    
        </Link>
        <Link 
          to={{ pathname: "https://www.linkedin.com/in/gibbs-herbert-akena-202bb2148/" }} 
          className="fa fa-linkedin" target="_blank">    
        </Link>
        <Link 
            to={{ pathname: "https://www.github.com/ghakena" }} 
            className="fa fa-github" target="_blank">    
        </Link>
        <Link 
            to={{ pathname: "https://www.instagram.com/iamrokku/" }} 
            className="fa fa-instagram" target="_blank">    
        </Link>



        </div>
        <Link to="/contact" className="main-btn">
          Contact Me
        </Link>
        
      </div>
    </div>
  )
}

export default Header;