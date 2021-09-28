import React, { useEffect, useState } from "react";
import classes from "./ParkingDetails.module.css";
import Table from "../Components/Table/Table";
import { useLocation } from "react-router-dom";
import axios from "axios";
function ParkingDetails() {
  const [state, setstate] = useState([]);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const id = query.get("id");
  useEffect(() => {
    async function getResult() {
      try {
        const results = await axios.get("/api/get-all-books/" + id);
        const array = [];
        results.data.forEach((result) => {
          array.push({ id: result._id, ...result });
        });
        setstate(array);
      } catch (error) {
        console.log(error);
      }
    }
    getResult();
  }, [id]);
  return (
    <div className={classes.ParkingDetails}>
      <h2 className={classes.Heading}>Parking Details</h2>
      {state.length !== 0 ? (
        <Table data={state} />
      ) : (
        <p>No Bookings in this Area</p>
      )}
    </div>
  );
}

export default ParkingDetails;
