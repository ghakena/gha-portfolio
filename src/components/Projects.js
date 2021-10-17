import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="container-fluid projects padding">
      <div className="col-md-12 text-center">
          <h1>Projects</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div class="card">
              <img
                src={"https://res.cloudinary.com/rokuirie/image/upload/v1634055651/rxx/banner-final_1_gchg2f.jpg"}
                class="card-img-top"
                alt="house-img"
              />
              <div class="card-body">
                <h5 class="card-title">RXX Real Estates Demo Site</h5>
                <p class="card-text">
                  A demo website built with HTML, CSS, SCSS, Less and JavaScript in order to recap the core concepts.
                </p>
                <Link 
                  to={{pathname: "https://rexex.netlify.app/"}} className="btn" 
                  target="_blank"
                >
                  Check It Out
                </Link>
              </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
              <img
                src={"https://res.cloudinary.com/rokuirie/image/upload/v1621850986/Portfolio/micheile-henderson-ZVprbBmT8QA-unsplash_1_gpazmn.jpg"}
                class="card-img-top"
                alt="overwood-img"
              />
              <div class="card-body">
                <h5 class="card-title">Overwood Website</h5>
                <p class="card-text">
                  A team project built during a design challenge sponsored by Overwood Company Ltd. Nigeria.
                  Executed by a team of five.
                </p>
                <Link 
                  to={{pathname: "https://overwood-team-five.netlify.app"}} className="btn" 
                  target="_blank"
                >
                  Check It Out
                </Link>
              </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
              <img
                src={"https://res.cloudinary.com/rokuirie/image/upload/v1621851516/Portfolio/lukas-blazek-mcSDtbWXUZU-unsplash_1_aw1uyx.jpg"}
                class="card-img-top"
                alt="ml-img"
              />
              <div class="card-body">
                <h5 class="card-title">Visualizations with Pygal & Matplotlib</h5>
                <p class="card-text">
                  This project undertook generation of world map visualizations using the pygal.maps.world module with PyGal and Matplotlib in Python.
                </p>
                <Link to={{pathname: "https://github.com/rokuirie/Visualisations-with-python-matplotlib-pygal-"}} 
                class="btn"
                target="_blank"
                >
                  Check It Out
                </Link>
              </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Projects
