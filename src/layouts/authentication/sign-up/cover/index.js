/**
=========================================================
* Custom HubSpot-Style Signup Page in React
=========================================================
*/

import React from "react";
import { Link } from "react-router-dom";


// images Link
import logo from '../../../../assets/images/Logo.svg';
import google from '../../../../assets/images/google-logo.webp';
import ms from '../../../../assets/images/ms-logo.webp';
import apple from '../../../../assets/images/apple-logo.webp';


function Signup() {
  return (
    <div className="signup-container">
      {/* Logo */}
      <div className="signup-header">
        <img
          src={logo}
          alt="HubSpot"
          className="signup-logo"
        />
        <p className="signup-text">
          Don’t have an account?{" "}
          <Link to="#" className="signup-link">
            Get started free
          </Link>
        </p>
      </div>

      {/* Info Box */}
      <div className="signup-info-box">
        <h4>Login faster and safer to your callippus account</h4>
        <p>
          Next time we’ll remember how you’d like to sign in so you can skip
          entering an email. You can always go back to{" "}
          <Link to="#" className="classic-login-link">
            classic login.
          </Link>
        </p>
      </div>

      {/* Main Form + Social Login */}
      <div className="signup-main">
        <div className="signup-form">
          <label>Email address</label>
          <input type="email" placeholder="you@example.com" />
          <button type="button" className="next-button">
            Next
          </button>
        </div>

        <div className="signup-divider"></div>

        <div className="signup-social">
          <button className="social-btn google">
            <img src={google} alt="Google"></img> Sign in with Google
          </button>
          <button className="social-btn microsoft">
            <img src={ms} alt="ms"></img> Sign in with Microsoft
          </button>
        </div>
      </div>

      {/* Demo & Buy Starter */}
      <div className="signup-footer-cta">
        <p>
          Get a demo of our premium software or upgrade your free account today
          by buying Starter
        </p>
        <div className="signup-cta-buttons">
          <button className="demo-button">Get a demo</button>
          <button className="starter-button">Buy Starter</button>
        </div>
      </div>

      {/* Footer */}
      <div className="signup-footer">
        <p>
          ©2025 HubSpot, Inc. All Rights Reserved.{" "}
          <Link to="#">Privacy Policy</Link> •{" "}
          <Link to="#">Manage Cookies</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
