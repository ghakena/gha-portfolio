import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="about text-center padding">
        <h1 className="display-4">About Me</h1>
        <div className="container">
          <div className="row padding">
            <div className="col-sm-12 col-md-5">
              <img src="https://res.cloudinary.com/rokuirie/image/upload/v1621762494/Portfolio/charles-deluvio-pjAH2Ax4uWk-unsplash_vlo4kp_1_1_vsry9l.jpg" class="img-thumbnail" alt="about-img" />
              <br />
            </div>
            <div className="col-sm-12 col-md-7 text-justify">
                I'm Gibbs, 23 and a 2021 Computer Engineering graduate.
                I have great passion for working on projects in the fields of web development and data science.
                I work with and I'm well-versed with ReactJS for building web applications.
                For data science projects, I work with Python as my tool of choice. I build fully-scalable websites and web applications based off of design choices agreed upon by the client. I also take on data analysis, machine learning and deep learning-oriented projects in the areas of fraud detection, risk analysis, credit-scoring, among others.
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;
