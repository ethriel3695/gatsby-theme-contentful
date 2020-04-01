import React from 'react';
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from '../Grid/GridContainer.js';
import GridItem from '../Grid/GridItem.js';
import Card from '../Card/Card.js';
import CardBody from '../Card/CardBody.js';
import CardHeader from '../Card/CardHeader.js';

import { cardTitle } from '../../../assets/jss/material-dashboard-pro-react.js';

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px',
  },
};

const useStyles = makeStyles(styles);

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
  )),
);

export default function GoogleMaps() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose" icon>
            <h4 className={classes.cardIconTitle}>Custom React Google Map</h4>
          </CardHeader>
          <CardBody>
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
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
