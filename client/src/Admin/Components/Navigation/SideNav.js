// import { useRouter } from "next/router";
import React from "react";
import { useHistory } from "react-router-dom";
import NavLink from "./NavLink";
import classes from "./SideNav.module.css";
import { connect } from "react-redux";
import { logout } from "../../../actions/auth";

function SideNav({ logout }) {
  const history = useHistory();
  return (
    <div className={classes.SideNav}>
      <ul className={classes.NavLinks}>
        <NavLink
          index={2}
          className={classes.NavLink}
          onClick={() => history.push("/admin/all-parkings")}
        >
          My Parkings
        </NavLink>
        <NavLink
          index={2}
          className={classes.NavLink}
          onClick={() => history.push("/admin/new-parking")}
        >
          Add a Parking
        </NavLink>

        <NavLink index={2} className={classes.NavLink} onClick={() => logout()}>
          Logout
        </NavLink>
      </ul>
    </div>
  );
}
export default connect(null, { logout })(SideNav);
