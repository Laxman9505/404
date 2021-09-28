import React from "react";
const NavLink = (props) => {
  // }
  return (
    <li className={props.className} onClick={props.onClick}>
      {props.children}
    </li>
  );
};

export default NavLink;
