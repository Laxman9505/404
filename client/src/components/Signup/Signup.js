import "./Signup.css";
import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { connect } from "react-redux";

const Signup = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    register(formData);
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="signup-container">
      <div className="signup">
        <h1>Signup</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
            name="name"
            value={name}
            onChange={(e) => onChangeHandler(e)}
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            name="email"
            value={email}
            onChange={(e) => onChangeHandler(e)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            name="password"
            value={password}
            onChange={(e) => onChangeHandler(e)}
          />

          <button className="submit-button" type="submit">
            Submit
          </button>

          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { register })(Signup);
