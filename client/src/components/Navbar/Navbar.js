import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/404logo.png";
import styles from "./Navbar.module.css";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
const Navbar = ({ isAuthorized, logout }) => {
  const guestLinks = (
    <ul>
      <Link to="/login" className={styles.link}>
        <li>Login</li>
      </Link>

      <Link to="/signup" className={styles.link}>
        <li>Signup</li>
      </Link>
    </ul>
  );
  const authorizedLinks = (
    <ul>
      <li>
        <Button type="button" className={styles.link} onClick={() => logout()}>
          Logout
        </Button>
      </li>
    </ul>
  );
  return (
    <>
      <div className={styles.navigationContainer}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className={styles.navLinkContainer}>
          {isAuthorized ? <>{authorizedLinks}</> : <>{guestLinks}</>}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
