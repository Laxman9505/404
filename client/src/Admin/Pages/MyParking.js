import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../Components/Card/Card";
import classes from "./MyParking.module.css";
function MyParking() {
  const [allParkings, setAllParkings] = useState();
  useEffect(() => {
    async function getParkings() {
      const parkings = await axios.get("/api/parking/allparking");
      setAllParkings(parkings.data.parkings);
    }
    getParkings();
  }, []);
  return (
    <div className={classes.MyParking}>
      <h2 className={classes.heading}>My Parkings</h2>
      <div className={classes.CardHolder}>
        {allParkings &&
          allParkings.map((parking) => (
            <Card
              key={parking._id}
              heading={parking.name}
              id={parking._id}
              subHeading={parking.location}
            />
          ))}
      </div>
    </div>
  );
}

export default MyParking;
