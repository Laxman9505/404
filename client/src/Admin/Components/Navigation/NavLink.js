import React from "react";
// import { useRouter } from "next/router";
import styles from "./Navigation.module.css";
const NavLink = (props) => {
  // const router = useRouter();
  // let className = props.className;
  // let path = router.pathname.split("/");
  // let href = props.href.split("/")[props.index];
  // if (path[props.index] === href) {
  //   console.log(href, path[props.index]);
  //   className = `${className} ${styles.Active}`;
  // }
  return <li className={props.className}>{props.children}</li>;
};

export default NavLink;
