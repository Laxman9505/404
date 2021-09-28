import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import "./Book.css";
import { book } from "../../actions/book";
import { connect } from "react-redux";
import { getParkings } from "../../actions/parking";
import RoomIcon from "@material-ui/icons/Room";
function Book({ parkingDetails, getParkings, book }) {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    vehicleNo: "",
    vehicle: "",
    location: query.get("name"),
    locationId: query.get("id"),
    arrivalTime: "",
  });
  const [totalPrice, setTotalPrice] = useState(null);
  useEffect(() => {
    getParkings(query.get("name"));
  }, [getParkings]);
  const { name, contact, vehicleNo, vehicle, arrivalTime } = formData;
  const [bikeChecked, setBikeChecked] = useState(false);
  const [carChecked, setCarChecked] = useState(false);

  const onChangeBike = (e) => {
    if (e.target.checked) {
      setBikeChecked(true);
      setFormData({ ...formData, vehicle: "bike" });
    } else {
      setBikeChecked(false);
      setFormData({ ...formData, vehicle: "" });
    }
    if (bikeChecked && carChecked) {
      setBikeChecked(false);
    }
  };
  const onChangeCar = (e) => {
    if (e.target.checked) {
      setCarChecked(true);
      setFormData({ ...formData, vehicle: "car" });
    } else {
      setCarChecked(false);
      setFormData({ ...formData, vehicle: "" });
    }
    if (bikeChecked && carChecked) {
      setCarChecked(false);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    book(formData);
    setFormData({
      name: "",
      contact: "",
      vehicleNo: "",
      vehicle: "",
      location: query.get("name"),
      locationId: query.get("id"),
      arrivalTime: "",
    });
  };

  return (
    <>
      <div className="book-container">
        <div className="vehicle-type">
          {parkingDetails && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <RoomIcon style={{ color: "#ff6666", fontSize: "30px" }} />
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  color: "#415765",
                }}
              >
                {parkingDetails[0].name}
              </h1>
              {parkingDetails && (
                <small
                  style={{
                    color: "#415765",
                    fontSize: "18px",
                    marginTop: "10px",
                  }}
                >
                  , {parkingDetails[0].location}
                </small>
              )}
            </div>
          )}
          <div className="heading">
            <h1>Vehicle Type</h1>
            <small>*required</small>
          </div>

          <div className="bike-container type " style={{ marginTop: "1rem" }}>
            <input type="checkbox" onChange={(e) => onChangeBike(e)} />
            <i className="fas fa-motorcycle"></i>
          </div>
          <div className="car-container type">
            <input type="checkbox" onChange={(e) => onChangeCar(e)} />
            <i className="fas fa-car"></i>
          </div>
          {vehicle && (
            <div className="price">
              <p>
                Total Price:{" "}
                {bikeChecked ? "Rs " + parkingDetails[0].bikePrice : <></>}
                {carChecked ? "Rs " + parkingDetails[0].carPrice : <></>}
                {bikeChecked && carChecked ? (
                  "Rs " +
                  (parkingDetails[0].bikePrice + parkingDetails[0].carPrice)
                ) : (
                  <></>
                )}
              </p>
            </div>
          )}
        </div>
        <div className="your-information">
          <h1>Your Information</h1>
          <form action="" onSubmit={(e) => submitHandler(e)}>
            <div className="form-group">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">phone Number:</label>
              <input
                type="text"
                name="contact"
                value={contact}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Vehicle No.</label>
              <input
                type="text"
                name="vehicleNo"
                value={vehicleNo}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Arrival Time</label>
              <input
                type="time"
                name="arrivalTime"
                value={arrivalTime}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  parkingDetails: state.parking.parkingDetails,
});
export default connect(mapStateToProps, { getParkings, book })(Book);
