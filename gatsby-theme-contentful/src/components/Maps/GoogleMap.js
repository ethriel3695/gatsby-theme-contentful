import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      backgroundColor: '#000000',
      border: '2px solid #FFFFFF',
      borderRadius: '100%',
      height: '18px',
      left: '50%',
      right: '50%',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      userSelect: 'none',
      width: '18px',
    }}
  >
    {text}
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: parseFloat(process.env.GATSBY_GOOGLE_LATITUDE),
      lng: parseFloat(process.env.GATSBY_GOOGLE_LONGITUDE),
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={process.env.GATSBY_GOOGLE_LATITUDE}
            lng={process.env.GATSBY_GOOGLE_LONGITUDE}
            text={process.env.GATSBY_GOOGLE_MAP_DESC}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
