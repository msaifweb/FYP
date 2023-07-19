import React from "react";
import googleLogo from "./googleLogo.png";
import "./login.css";

const Login = () => {
  return (
    <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4 main">
      {/* <div className="text-center w-100 mt-4 mb-4 mt-md-4 mb-md-5 fw-light h5">
           <a className="ms-0 ms-md-1 d-inline-block" href="google.com" />
          </div> */}
      <form method="#" action="#" className="onsubmit-disable">
        <input
          type="hidden"
          name="_token"
          defaultValue="178oUAIyCIANvij3y0QI3sEorcTg5Rg0IsmmxDnX"
        />
        <div className="card justify-content-start">
          <div className="p-3 border-bottom">
            <h1 className="h3 fw-light mb-0 text-center">Login</h1>
          </div>
          <div className="p-3 p-sm-4">
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-bold">
                Your email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                autoComplete="email"
                required
                autofocus
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-bold">
                Your password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                autoComplete="current-password"
                required
              />
            </div>
            <div className="mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="remember"
                  type="checkbox"
                  id="remember_me"
                />
                <label className="form-check-label" htmlFor="remember_me">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Login →
            </button>
            <div className="d-flex align-items-center mb-3">
              <div className="col pt-1 mb-1 border-bottom" />
              <div className="text-secondary fst-italic mx-3 small">Or:</div>
              <div className="col pt-1 mb-1 border-bottom" />
            </div>
            <a className="btn border-primary w-100 mb-4" href="auth/google">
              <div className="d-flex align-items-center justify-content-between">
                <img height="23" class="me-3" src={googleLogo} alt="Googole-Logo" />
                <span className>Login with Google</span>
                <div aria-hidden="true" />
              </div>
            </a>
            <div className="d-flex align-items-center justify-content-between flex-wrap">
              <a
                className="my-2 small text-decoration-none me-5"
                href="https://tidycal.com/forgot-password"
              >
                Forgot your password?
              </a>
              <a className="my-3 small text-decoration-none" href="/">
                Not registered?
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
