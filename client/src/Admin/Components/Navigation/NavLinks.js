import NavLink from "./NavLink";
import React from "react";
import styles from "./NavLinks.module.css";
const NavLinks = (props) => {
  return (
    <div className={styles.NavLinks}>
      <NavLink index={1} href="/myarticles/allarticles" className={styles.Link}>
        My Articles
      </NavLink>
      <NavLink index={1} href="/payouts" className={styles.Link}>
        Payouts
      </NavLink>
      <NavLink index={1} href="/analytics/overview" className={styles.Link}>
        Analytics
      </NavLink>
      <NavLink index={1} href="/help" className={styles.Link}>
        Help
      </NavLink>
    </div>
  );
};

export default NavLinks;
