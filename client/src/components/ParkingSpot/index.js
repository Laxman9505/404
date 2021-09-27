import React from "react";

import "./ParkingSpot.css";
import { Link } from "react-router-dom";

export default function ParkingSpot(props) {
  const {
    details: { name, src, location, carPrice, bikePrice },
  } = props;
  return (
    <div className="ParkingSpot">
      <img src={src} alt="" />
      <div className="content-container">
        <p className="heading">{name}</p>
        <small>{location}</small>
        <div>
          <i class="fas fa-car"></i>: {"     "}
          <small>
            Rs{"  "} {carPrice}
          </small>
        </div>
        <div>
          <i class="fas fa-motorcycle"></i>: {"     "}
          <small>Rs {bikePrice}</small>
        </div>

        <Link to="/book">
          <button type="button">Book now</button>
        </Link>
      </div>
    </div>
  );
}
