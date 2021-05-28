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
                src={"https://res.cloudinary.com/rokuirie/image/upload/v1621850114/Portfolio/aleks-dahlberg-b7DzEp2lsRI-unsplash_1_ibkjos.jpg"}
                class="card-img-top"
                alt="weather-img"
              />
              <div class="card-body">
                <h5 class="card-title">LUGANDA WEATHER PERSONAL ASSISTANT</h5>
                <p class="card-text">
                  A desktop weather app using the OpenWeatherMap API for forecasts in Luganda, 
                  a native Ugandan language, with Java.
                </p>
                <Link 
                  to={{pathname: "https://github.com/rokuirie/weather-forecast-app"}} className="btn" 
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
                <h5 class="card-title">THE OVERWOOD INTSHP WEBSITE CHALLENGE</h5>
                <p class="card-text">
                  A team project built during a design challenge sponsored by Overwood Company Ltd. Nigeria.
                  Executed by a team of five.
                </p>
                <Link 
                  to={{pathname: "https://github.com/rokuirie/Overwood-Team-Five"}} className="btn" 
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
                <h5 class="card-title">MACHINE LEARNING MODELLING WITH KERAS</h5>
                <p class="card-text">
                  This project is a simple and precise look into the deep learning library Keras, and how it 
                  can be used to solve real-world problems using ML algorithms.
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
