import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, Redirect } from "react-router-dom";
import loginOverlay from "../../Images/loginnew.jpg";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import { connect } from "react-redux";
import { login } from "../../actions/auth";


const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const submitHandler = (e) => {
    e.preventDefault();
    login(formData);
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-container">
      <img src={loginOverlay} alt="" className="login-overlay" />
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={(e) => submitHandler(e)}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={email}
            name="email"
            onChange={(e) => onChangeHandler(e)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            name="password"
            onChange={(e) => onChangeHandler(e)}
          />

          <button className="submit-button" type="submit">
            Submit
          </button>

          <p>
            Don't have an account?
            <span>
              <Link to="/signup">Signup</Link>
            </span>
          </p>
          <div className="line"></div>
          <button className="sign-in-option" type="button">
            <EmailIcon style={{ color: "#dd4b39" }} />
            <p>Sign In With Google</p>
          </button>
          <button className="sign-in-option" type="button">
            <FacebookIcon style={{ color: "#3b5998" }} />
            <p>Sign In With Facebook</p>
          </button>
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

export default connect(mapStateToProps, { login })(Login);
