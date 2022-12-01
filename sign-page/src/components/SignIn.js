import React from "react";
import App from "../App.css";
import logo from "../images/logo.png";
import { useState } from "react";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredEmail, enteredPassword);
    setEnteredEmail("");
    setEnteredPassword("");
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <div>
    <div className="form">
      <img src={logo}></img>
      <form onSubmit={submitHandler}>
        <div className="total">
          <div className="head">
              <h3>Admin Log in</h3>
          </div>
          <div className="mail">
            <label className="mobile" htmlFor="email">
              Email Id or Mobile Number
            </label>
            <input
              className="one"
              type="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              id="email"
              placeholder="Your mail Id or Mobile number"
              name="email"
              required
            />
          </div>
          <div className="number">
            <label className="word" htmlFor="password">
              Password
            </label>
            <input
              className="one"
              type="password"
              id="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              placeholder="Your Password"
              name="password"
              required
            />
          </div>
          <div className="checkbox">
            <input className="input" type="checkbox"></input>
            <label className="remember" htmlFor="text">
              Remember Me
            </label>
          </div>
          <button type="submit">LOG IN</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
