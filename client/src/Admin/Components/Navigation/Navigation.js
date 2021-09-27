import React from "react";
import styles from "./Navigation.module.css";
import NavLinks from "./NavLinks";
import Avatar from "@material-ui/core/Avatar";
const Navigation = (props) => {
  return (
    <div className={styles.Navigation}>
      <NavLinks href={props.href} />
      {/* <Avatar alt="User facxe" src="/images/avatar.jpg" /> */}
    </div>
  );
};

export default Navigation;
