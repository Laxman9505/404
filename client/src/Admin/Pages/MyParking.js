import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import classes from "./MyParking.module.css";
function MyParking() {
  const [allParkings, setAllParkings] = useState();
  useEffect(async () => {
    const parkings = await axios.get("/api/parking/allparking");
    console.log("parkings ", parkings);
    setAllParkings(parkings.data.parkings);
  }, []);
  return (
    <div className={classes.MyParking}>
      <h2 className={classes.heading}>My Parkings</h2>
      <div className={classes.CardHolder}>
        {allParkings &&
          allParkings.map((parking) => (
            <Card heading={parking.name} subHeading={parking.location} />
          ))}
      </div>
    </div>
  );
}

export default MyParking;
