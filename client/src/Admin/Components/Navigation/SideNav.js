// import { useRouter } from "next/router";
import React from "react";
import NavLink from "./NavLink";
import classes from "./SideNav.module.css";
function SideNav() {
  // const router = useRouter();
  // let path = router.pathname.split("/")[1];
  // let navlinks = [];
  // if (path == "myarticles") {
  //   navlinks = [
  //     ["allarticles", "All Articles"],
  //     ["addnew", "Add New"],
  //     ["draft", "Draft"],
  //     ["published", "Published"],
  //   ];
  // } else if (path == "payouts") {
  //   navlinks = [["settings", "Payout Settings"]];
  // } else if (path == "analytics") {
  //   navlinks = [["overview", "Overview"]];
  // } else {
  //   navlinks = [["", "Help"]];
  // }
  // return (
  //   <div className={classes.SideNav}>
  //     <ul className={classes.NavLinks}>
  //       {navlinks.map((navlink) => (
  //         <NavLink
  //           index={2}
  //           key={navlink[0]}
  //           href={"/" + path + "/" + navlink[0]}
  //           className={classes.NavLink}
  //         >
  //           {navlink[1]}
  //         </NavLink>
  //       ))}
  return (
    <div className={classes.SideNav}>
      <ul className={classes.NavLinks}>
        <NavLink
          index={2}
          href="/myarticles/allarticles"
          className={classes.NavLink}
        >
          All Articles
        </NavLink>
        <NavLink
          index={2}
          href="/myarticles/addnew"
          className={classes.NavLink}
        >
          Add New
        </NavLink>
        <NavLink index={2} href="/" className={classes.NavLink}>
          Draft
        </NavLink>
        <NavLink index={2} href="/" className={classes.NavLink}>
          Published
        </NavLink>
      </ul>
    </div>
  );
}
export default SideNav;
