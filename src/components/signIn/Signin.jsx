import React from "react";
import "./signin.css";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";

export default function Signin() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="sign-in">
      <div className="left">
        <span className="heading-left">Board.</span>
      </div>
      <div className="right">
        <div className="container">

          <div className="heading-right">Sign In</div>
          <span className="message">Sign in to your account</span>
          <div className="auth">
            <button className="auth-google" onClick={() => loginWithRedirect()}>
              <FcGoogle className="icons" />
              <span>Sign in with Google</span>
            </button>
            <button className="auth-apple" onClick={() => loginWithRedirect()}>
              <BsApple className="icons" />
              <span>Sign in with Apple</span>
            </button>
          </div>
          <div className="sign-in-box">
            <span className="email">Email Address</span>
            <input
              type="text"
              className="email-input"
              placeholder="Enter your name"
            />
            <span className="password">Password</span>
            <input
              type="text"
              className="password-input"
              placeholder="Enter the password"
            />
            <span className="forgot"> Forgot Password</span>
            <button className="signin-button" onClick={() => loginWithRedirect()}>
              Sign In
            </button>
          </div>
          <span className="register-text">
            Don't have an account?{" "}
            <span className="register">Register here</span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
