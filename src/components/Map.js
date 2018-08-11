import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(({ lat, lng, ...props }) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat, lng }}
      disableDefaultUI={true}
    >
      {props.isMarkerShown && <Marker position={{ lat, lng }} />}
    </GoogleMap>
  ))
);

export default props => (
  <div className="section">
    <div className="content">
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXDJUG9RXNyI1v3BqFrxJUAV3tmWQcnMk&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `200px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        {...props}
      />
    </div>
  </div>
);
