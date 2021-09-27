// import { useRouter } from "next/router";
import React from "react";
import NavLink from "./NavLink";
import classes from "./SideNav.module.css";
function SideNav() {
  return (
    <div className={classes.SideNav}>
      <ul className={classes.NavLinks}>
        <NavLink index={2} className={classes.NavLink}>
          My Parkings
        </NavLink>
        <NavLink index={2} className={classes.NavLink}>
          Add a Parking
        </NavLink>
        <NavLink index={2} className={classes.NavLink}>
          Earnings
        </NavLink>
        <NavLink index={2} className={classes.NavLink}>
          Settings
        </NavLink>
      </ul>
    </div>
  );
}
export default SideNav;
