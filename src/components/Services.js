import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  return (
    <div className="container-fluid services padding">
      <div className="col-md-12 text-center">
          <h1>Services</h1>
      </div>
      <div className="row">
        <div className="col-md-3 service-card">
          <div class="card text-white bg-dark mb-3" style={{maxWidth: "19rem"}}>
            <div class="card-body">
              <span class="material-icons">
                  design_services
              </span>
              <h5 class="card-title">Web Design</h5>
              <p class="card-text">
              I offer design of mock-ups for websites to be built at 
              an international standard, using tools like FIGMA.
              </p>
            </div>
          </div>
        </div>
          <div className="col-md-3 service-card">
            <div class="card text-white bg-dark mb-3" style={{maxWidth: "19rem"}}>
              <div class="card-body">
                <span class="material-icons">
                  computer
                </span>
                <h5 class="card-title">Web Development</h5>
                <p class="card-text">
                  I build websites and web applications from scratch 
                  and using frameworks for the demands of 
                  various clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 service-card">
            <div class="card text-white bg-dark mb-3" style={{maxWidth: "19rem"}}>
              <div class="card-body">
                <span class="material-icons">
                  analytics
                </span>
                <h5 class="card-title">Data Analysis</h5>
                <p class="card-text">
                  For SMEs to large scale companies, I provide detailed insights that 
                  help with important and standard company decisions.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Services
