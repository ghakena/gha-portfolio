import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  return (
    <div className="container-fluid services padding">
      <div className="col-md-12 text-center">
          <h1>Services</h1>
      </div>
      <div className="services-items">
        <div className="service-item-1">
          <span class="material-icons">
            design_services
          </span>
          <h5 class="card-title">Web Design</h5>
          <p class="card-text">
            I offer design of mock-ups for websites to be built at 
            an international standard, using tools like FIGMA.
          </p>
        </div>
        <div className="service-item-2">
          <span class="material-icons">
            computer
          </span>
          <h5 class="card-title">
            Web Development
          </h5>
          <p class="card-text">
            I build websites and web applications from scratch 
            and using frameworks for the demands of 
            various clients.
          </p>
        </div>
        <div className="service-item-3">
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
  )
}

export default Services
