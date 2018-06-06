import React from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps"

const MyGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultCenter = { { lat: props.lat, lng: props.lon} }
    defaultZoom = { 12 }
  />
));

export default (props) => {
  return (
    <MyGoogleMap
      lat={props.lat}
      lon={props.lon}
      containerElement={ <div style={{ height: `200px`, width: '300px' }} /> }
      mapElement={ <div style={{ height: `100%` }} /> }
    />
  );
}