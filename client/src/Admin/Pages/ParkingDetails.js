import React from "react";
import classes from "./ParkingDetails.module.css";
import Table from "../Components/Table/Table";
function ParkingDetails() {
  return (
    <div className={classes.ParkingDetails}>
      <h2 className={classes.Heading}>Parking Details</h2>
      <Table />
    </div>
  );
}

export default ParkingDetails;
