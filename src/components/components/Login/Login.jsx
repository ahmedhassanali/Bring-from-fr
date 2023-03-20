import Modal from "react-bootstrap/Modal";
import "./Login.css";
import React from 'react'


function Login(props) {
  return (
    <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton className="titel">
        <h3>Login</h3>
      </Modal.Header>
      <Modal.Body>
          <div class="login row">
            <div class="col-xl-10">
                <form className="form">
                  
                  <input placeholder="Email Address" type="email" class="form-control" />
                  <input placeholder="Password" type="password" class="form-control" />
                  
                  <div class="row mb-4">

                    <div class="col d-flex justify-content-center">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="form2Example31" checke />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                      </div>
                    </div>

                    <div class="col">
                      <a href="/">Forgot password?</a>
                    </div>

                  </div>

                  <button type="button" class="btn btn-primary col-12 mb-4"> Sign in </button>
                  <div class="text-center">

                    <p> Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    
                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fa fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                      <i class="fa fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fa fa-github"></i>
                    </button>

                  </div>
                </form>
            </div>
          </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
