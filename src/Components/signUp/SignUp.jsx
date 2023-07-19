import React from 'react'
import'./signup.css'
import googleLogo from './googleLogo.png';
const SignUp=()=> {
      return (
  
        <div className="container">
          <div className="row justify-content-center mt-3">
            <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <h1 className="h3 fw-light mb-4 pb-2 lh-sm text-center">
                Cool! Let’s get you registered:
              </h1>
              <form method="#" action="#" className="onsubmit-disable">
                <input type="hidden" name="_token" placeholder="John Doe" />   
                  <div className="card p-3 p-sm-4 justify-content-start">
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-bold">Your name:</label>
                    <input type="text" name="name" id="name" className="form-control" required autofocus />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-bold">Your email:</label>
                    <input type="email" name="email" id="email" className="form-control" autoComplete="username"  />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label fw-bold">Your password:</label>
                    <input type="password" name="password" id="password" autoComplete="new-password" className="form-control" required aria-autocomplete="list" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password_confirmation" className="form-label fw-bold">Confirm your password:</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" autoComplete="new-password" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-2 mb-sm-1 mt-1">Register →</button>
                  <div className="d-flex align-items-center mt-3 mb-3">
                    <div className="col pt-1 mb-1 border-bottom" />
                    <div className="text-secondary fst-italic mx-3 small">Or:</div>
                    <div className="col pt-1 mb-1 border-bottom" />
                  </div>
                  <a className="btn border-primary w-100 mb-2" href="https://tidycal.com/auth/google">
                    <div className="d-flex align-items-center justify-content-between">
                      <img height={23} className="me-3" src={googleLogo} alt='GOOGLELOGO'/>
                      <span className>Register with Google</span>
                      <div aria-hidden="true" />
                    </div>
                  </a>
                </div>
                <div className="text-center mt-4">
                  <a className="text-decoration-none small" href="https://tidycal.com/login">
                    Already registered?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
export default SignUp;