import React from "react";
import { Link } from "react-router-dom";

// Images
import logo from '../../../../assets/images/Logo.svg';
import google from '../../../../assets/images/google-logo.webp';
import ms from '../../../../assets/images/ms-logo.webp';

function Signup() {
  return (
    <>
      {/* Header */}
      <header className="header_sign_auth">
        <div className="container">
          <div className="auth_layout_display">
              <div className="header-left">
            <img src={logo} alt="Polaris" className="header-logo" />
          </div>
          <div className="header-right">
            {/* <Link to="#" className="header-signup-btn">
              Sign up
            </Link> */}
          </div>
          </div>
        </div>
      </header>

      {/* Signup Section */}
      <div className="signup-container">
        {/* Welcome Text */}
        <div className="signup-welcome">
          <h2>Welcome to Polaris</h2>
          <p>Create your account or Log in to get started</p>
        </div>

        {/* Social Sign In */}
        <div className="signup-social">
          <button className="social-btn google">
            <img src={google} alt="Google" /> Sign In with Google
          </button>
          <button className="social-btn microsoft">
            <img src={ms} alt="Microsoft" /> Sign In with Microsoft
          </button>
        </div>

        {/* Email Form */}
        <div className="signup-form">
          <label>Email address*</label>
          <input type="email" placeholder="Enter your email" />
          <button type="button" className="next-button">
            Next
          </button>
        </div>

        {/* Footer Link */}
        {/* <div className="signup-footer">
          <p>
            Don’t have an account?{" "}
            <Link to="#" className="signup-link">
              Sign up
            </Link>
          </p>
        </div> */}
      </div>
    </>
  );
}

export default Signup;
