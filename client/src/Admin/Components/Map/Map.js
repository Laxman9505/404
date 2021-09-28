import React, { Component } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import classes from "./Map.module.css";
const MyMarker = (props) => {
  const initMarker = (ref) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return <Marker ref={initMarker} {...props} />;
};

class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ currentPos: e.latlng });
    this.props.getcoordinates(e.latlng);
  }

  render() {
    return (
      <Map
        center={this.props.center}
        zoom={this.props.zoom}
        onClick={this.handleClick}
        className={classes.MapContainer}
      >
        <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        {this.state.currentPos && (
          <MyMarker position={this.state.currentPos}></MyMarker>
        )}
      </Map>
    );
  }
}

export default MapExample;
