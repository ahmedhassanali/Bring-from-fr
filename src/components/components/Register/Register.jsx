import Modal from "react-bootstrap/Modal";
import './Register.css'
import React from 'react'

function Register(props) {
  return (
    <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton className="titel">
        <h3>Register</h3>
      </Modal.Header>
      <Modal.Body>
          <div className="register row">
            <div className="col-xl-10">
                <form className="form">
                  
                  <input placeholder="First Name" type="text" className="form-control col-2" />
                  <input placeholder="last Name" type="text" className="form-control col-5" />
                  <input placeholder="Email" type="email" className="form-control" />
                  <input placeholder="Password" type="password" className="form-control" />
                  <input placeholder="Phone Number" type="password" className="form-control" />

                  <button type="button" className="btn btn-primary col-12 mb-4"> Sign Up </button>
                  <div className="text-center">

                    <p>or sign up with:</p>
                    
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fa fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fa fa-github"></i>
                    </button>

                  </div>
                </form>
            </div>
          </div>
      </Modal.Body>
    </Modal>
  );
}

export default Register;
