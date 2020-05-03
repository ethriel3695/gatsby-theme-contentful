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
import CardAvatar from '../Card/CardAvatar.js';

import styles from '../../../assets/jss/material-dashboard-pro-react/views/userProfileStyles.js';

import { useAuth0 } from '../../react-auth0-spa';

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const { loading, user } = useAuth0();
  const [userData, setUserData] = useState();

  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  useEffect(() => {
    axios
      .get(`${process.env.GATSBY_AWS_USER_API}/auth0|5e7d2492bc90b30c6645abbd`)
      .then(res => {
        setUserData(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setBirthday(res.data.user_metadata.birthday);
        setAddress(res.data.user_metadata.address);
        setCity(res.data.user_metadata.city);
        setState(res.data.user_metadata.state);
        setZip(res.data.user_metadata.zip);
        setAboutMe(res.data.user_metadata.aboutMe);
      });
  }, []);

  if (loading || !user || !userData) {
    return <div>Loading...</div>;
  }

  const editProfile = async () => {
    const data = {
      userId: userData.user_id,
      name: name,
      email: email,
      birthday: birthday,
      address: address,
      city: city,
      state: state,
      zip: zip,
      aboutMe: aboutMe,
    };

    axios
      .post(process.env.GATSBY_AWS_USER_API, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        // withCredentials: true,
        // crossdomain: true,
      })
      .catch(err => {
        console.log(err);
      })
      .then(res => {
        console.log(res);
        // setUserData(res.data);
      });
  };
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
                    value={name}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={setName}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    value={email}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={setEmail}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Birthday"
                    id="birthday"
                    value={birthday}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={setBirthday}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Address"
                    id="address"
                    value={address}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={setAddress}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    value={city}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={setCity}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="State"
                    id="state"
                    value={state}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={setState}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    value={zip}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={setZip}
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
                    value={aboutMe}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    handleChange={setAboutMe}
                    inputProps={{
                      multiline: true,
                      rows: 3,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Button
                color="rose"
                className={classes.updateProfileButton}
                onClick={() => editProfile()}
              >
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
