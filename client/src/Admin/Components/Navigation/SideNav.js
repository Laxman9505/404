// import { useRouter } from "next/router";
import React from "react";
import { useHistory } from "react-router-dom";
import NavLink from "./NavLink";
import classes from "./SideNav.module.css";

function SideNav() {
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
        <NavLink
          index={2}
          className={classes.NavLink}
          onClick={() => history.push("/admin/all-parkings")}
        >
          Earnings
        </NavLink>
        <NavLink
          index={2}
          className={classes.NavLink}
          onClick={() => history.push("/admin/all-parkings")}
        >
          Settings
        </NavLink>
      </ul>
    </div>
  );
}
export default SideNav;
