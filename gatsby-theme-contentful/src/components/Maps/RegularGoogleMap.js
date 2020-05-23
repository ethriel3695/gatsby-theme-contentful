import React from 'react';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const RegularMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{
        lat: parseFloat(process.env.GATSBY_GOOGLE_LATITUDE),
        lng: parseFloat(process.env.GATSBY_GOOGLE_LONGITUDE),
      }}
      defaultOptions={{
        scrollwheel: false,
      }}
    >
      <Marker
        position={{
          lat: parseFloat(process.env.GATSBY_GOOGLE_LATITUDE),
          lng: parseFloat(process.env.GATSBY_GOOGLE_LONGITUDE),
        }}
      />
    </GoogleMap>
  ))
);

export default function GoogleMaps() {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <h4>{process.env.GATSBY_GOOGLE_MAP_DESC || ''}</h4>
      <div>
        <RegularMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `280px`,
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
