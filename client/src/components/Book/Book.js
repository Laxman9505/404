import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    getParkings(query.get("name"));
  }, [getParkings, query]);
  const { name, contact, vehicleNo, vehicle, arrivalTime } = formData;

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
  console.log(vehicle);
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
          <select
            name="vehicle"
            id="vehicle"
            style={{
              width: "60%",
              alignSelf: "flex-start",
              height: "30px",
              marginTop: "10px",
              fontSize: "20px",
              background: "#f4f4f1",
            }}
            onChange={(e) =>
              setFormData({ ...formData, vehicle: e.target.value })
            }
          >
            <option value="">Select your vehicle type *</option>
            <option
              value="bike"
              onChange={(e) =>
                setFormData({ ...formData, vehicle: e.target.value })
              }
            >
              Bike
            </option>
            <option
              value="car"
              onChange={(e) =>
                setFormData({ ...formData, vehicle: e.target.value })
              }
            >
              Car
            </option>
          </select>
          {vehicle && (
            <div className="price">
              <p>
                price: Rs {vehicle === "car" && "100"}
                {vehicle === "bike" && "50"}
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
