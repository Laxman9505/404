import React from "react";
import classes from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={classes.Card}>
      <h3 className={classes.Heading}>{props.heading}</h3>
      <h3 className={classes.subHeading}>{props.subHeading}</h3>
    </div>
  );
}
