import React from "react";
import { useHistory } from "react-router";
import classes from "./Card.module.css";
export default function Card(props) {
  const history = useHistory();
  const cardClickHandler = () => {
    history.push(`/admin/parking-details?id=${props.id}`);
  };
  return (
    <div className={classes.Card} onClick={cardClickHandler}>
      <h3 className={classes.Heading}>{props.heading}</h3>
      <h3 className={classes.subHeading}>{props.subHeading}</h3>
    </div>
  );
}
