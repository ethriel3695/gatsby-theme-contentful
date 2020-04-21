import React, { useState, useEffect } from 'react';
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

// @material-ui/icons
// import PermIdentity from '@material-ui/icons/PermIdentity';

// core components
import GridContainer from '../Grid/GridContainer.js';
import GridItem from '../Grid/GridItem.js';
import Button from '../CustomButtons/Button.js';
import CustomInput from '../CustomInput/CustomInput.js';
import Clearfix from '../Clearfix/Clearfix.js';
import Card from '../Card/Card.js';
import CardBody from '../Card/CardBody.js';
import CardHeader from '../Card/CardHeader.js';
import CardIcon from '../Card/CardIcon.js';
import CardAvatar from '../Card/CardAvatar.js';

import styles from '../../../assets/jss/material-dashboard-pro-react/views/userProfileStyles.js';

import { useAuth0 } from '../../react-auth0-spa';

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const { loading, user } = useAuth0();
  const [userData, setUserData] = useState();
  console.log(user);

  useEffect(() => {
    axios
      .get(
        `https://c418zumrs8.execute-api.us-west-2.amazonaws.com/Dev/compare-yourself/auth0|5e7d2492bc90b30c6645abbd`,
      )
      .then(res => {
        setUserData(res.data);
      });
  }, []);

  if (loading || !user || !userData) {
    return <div>Loading...</div>;
  }
  console.log(userData);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" icon>
              <h4 className={classes.cardIconTitle}>
                Edit Profile - <small>Complete your profile</small>
              </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Full Name"
                    id="full-name"
                    value={user.name}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    value={user.email}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Birthday"
                    id="birthday"
                    value={userData.user_metadata.birthday}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Address"
                    id="address"
                    value={userData.user_metadata.address}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    value={userData.user_metadata.city}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="State"
                    id="state"
                    value={userData.user_metadata.state}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    value={userData.user_metadata.zip}
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel
                    style={{
                      color: '#AAAAAA',
                    }}
                  >
                    About me
                  </InputLabel>
                  <CustomInput
                    labelText="Who are you?"
                    id="about-me"
                    value={userData.user_metadata.aboutMe}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 3,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Button color="rose" className={classes.updateProfileButton}>
                Update Profile
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={user.picture} alt="Profile" />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>User Role</h6>
              <h4 className={classes.cardTitle}>{user.name}</h4>
              <p className={classes.description}>
                {userData.user_metadata.aboutMe}
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
