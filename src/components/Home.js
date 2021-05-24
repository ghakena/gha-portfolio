import React from 'react';
import Particles from 'react-particles-js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Particles 
            className="particles-canvas"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 900
                  }
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 10,
                  color: "#F46036"
                }
              }
            }}
          />
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  )
}

export default Home;
