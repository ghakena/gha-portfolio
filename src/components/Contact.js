import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  return (
    <div className="contact padding">
      <div className="col-md-12 text-center">
          <h1>Contact Me</h1>
        </div>
      <div className="container-fluid">
        <form className="contact-form" style={{width: "40%"}}>
          {/* <!-- Name input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">Name</label>
            <input type="text" id="form4Example1" class="form-control"/>
          </div>

          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example2">Email address</label>
            <input type="email" id="form4Example2" class="form-control"/>
          </div>

          {/* <!-- Message input --> */}
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Message</label>
            <textarea class="form-control" id="form4Example3" rows="4">
            </textarea>
          </div>
          
          {/* <!-- Submit button --> */}
          <button type="submit" class="btn mb-4">Send</button>
        </form>
      </div>
      
      
    </div>
  )
}

export default Contact
