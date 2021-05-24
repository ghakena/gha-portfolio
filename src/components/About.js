import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="about text-center padding">
        <h1 className="display-4">About Me</h1>
        <div className="container">
          <div className="row padding">
            <div className="col-md-5">
              <img src="https://res.cloudinary.com/rokuirie/image/upload/v1621762494/Portfolio/charles-deluvio-pjAH2Ax4uWk-unsplash_vlo4kp_1_1_vsry9l.jpg" class="img-thumbnail" alt="about-img" />
              <br />
            </div>
            <div className="col-md-7 text-justify">
                I am Gibbs, 23 and a 2021 Computer Engineering graduate.
                I have great passion for working on projects in the fields of web development and data science.
                I work with and I'm well-versed with ReactJS for building web applications.
                For data science projects, I work with Python as my tool of choice.
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;
