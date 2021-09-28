import axios from "axios";
import React, { useState } from "react";
import Map from "../Components/Map/Map";
import classes from "./NewParking.module.css";
import { alert } from "../../components/alert/alert";
import { useHistory } from "react-router";
export default function NewParking() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [carSlot, setCarSlot] = useState("");
  const [bikeSlot, setBikeSlot] = useState("");
  const [bikePrice, setBikePrice] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const coordinateChangeHandler = (coordinates) => {
    console.log(coordinates);
    setCoordinates([coordinates.lat, coordinates.lng]);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };
  const carSlotChangeHandler = (e) => {
    setCarSlot(e.target.value);
  };
  const bikeSlotChangeHandler = (e) => {
    setBikeSlot(e.target.value);
  };
  const carPriceChangeHandler = (e) => {
    setCarPrice(e.target.value);
  };
  const bikePriceChangeHandler = (e) => {
    setBikePrice(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "/api/parking/newparking",
      JSON.stringify({
        name: name,
        location: address,
        carSlot,
        bikeSlot,
        carPrice,
        bikePrice,
        coordinates,
      }),
      {
        headers: {
          "Content-Type": "Application/JSON",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    alert("Parking created successfully", true);
    history.push("/admin/all-parkings");
  };
  return (
    <div className={classes.NewParking}>
      <h2 className={classes.heading}>Add a New Parking</h2>
      <form className={classes.Form}>
        <div className={classes.InputGroup}>
          <label>Parking Name</label>
          <input
            type="text"
            placeholder="Parking Name"
            required
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes.InputGroup}>
          <label>Parking Address</label>
          <input
            type="text"
            placeholder="Parking Name"
            required
            onChange={addressChangeHandler}
          />
        </div>
        <div className={classes.InputGroup}>
          <label>Choose in Map</label>
          <Map
            zoom={13}
            center={{ lat: 27.709, lng: 445.31762 }}
            getcoordinates={(coordinates) =>
              coordinateChangeHandler(coordinates)
            }
          />
        </div>
        <div className={classes.InputGroup}>
          <label>Car Slot</label>
          <input
            type="number"
            placeholder="Car Slot"
            required
            onChange={carSlotChangeHandler}
          />
        </div>
        <div className={classes.InputGroup}>
          <label>Bike Slot</label>
          <input
            type="number"
            placeholder="Bike Slot"
            required
            onChange={bikeSlotChangeHandler}
          />
        </div>
        <div className={classes.InputGroup}>
          <label>Car Price</label>
          <input
            type="number"
            placeholder="Car Price"
            required
            onChange={carPriceChangeHandler}
          />
        </div>
        <div className={classes.InputGroup}>
          <label>Bike Price</label>
          <input
            type="number"
            placeholder="Bike Price"
            required
            onChange={bikePriceChangeHandler}
          />
        </div>
        <button className={classes.Button} onClick={onSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
