import React from "react";

import "./ParkingSpot.css";
import { Link } from "react-router-dom";

export default function ParkingSpot(props) {
  const {
    details: { name, src, location, distance },
  } = props;
  return (
    <div className="ParkingSpot">
      <img src={src} alt="" />
      <div className="content-container">
        <p className="heading">{name}</p>
        <small>{location}</small>
        <p>{distance}</p>
        <Link to="/book">
          <button type="button">Book now</button>
        </Link>
      </div>
    </div>
  );
}
