import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitterSquare,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { useExternalLinks } from '../hooks/externalLinks';
import { useSiteMetadata } from '../hooks/siteMetadata';
import { useSocialInfo } from '../hooks/socialInfo';
import Grid from '@material-ui/core/Grid';

export default function Footer() {
  const { copyright } = useSiteMetadata();
  const { email, facebook, twitter, github } = useSocialInfo();
  const links = useExternalLinks();
  let social = [];
  let SocialContainer = null;
  if (facebook !== '') {
    social.push({ icon: faFacebook, link: facebook });
  }
  if (twitter !== '') {
    social.push({ icon: faTwitterSquare, link: twitter });
  }
  if (github !== '') {
    social.push({ icon: faGithub, link: github });
  }
  if (email !== '') {
    social.push({ icon: faEnvelope, link: email });
  }

  if (social.length > 0) {
    SocialContainer = (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {social.map((soc, index) => (
            <a
              key={index}
              href={`${soc.link}/`}
              target="_blank"
              rel="noopener noreferrer"
              className={'socialLink'}
            >
              <FontAwesomeIcon
                icon={soc.icon}
                className={'fontAwesomeFooterIcon'}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
  return (
    <footer>
      <Grid container>
        {links.map((link, index) => (
          <Grid
            key={`container-${index}`}
            style={{ textAlign: 'center' }}
            item
            xs={12}
            md={6}
            lg={4}
          >
            <a
              key={index}
              href={`${link.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={'externalLink'}
            >
              {`${link.label}`}
            </a>
          </Grid>
        ))}
      </Grid>
      {SocialContainer}
      <Grid container mt={10}>
        <Grid item>
          <div style={{ textAlign: 'justify', padding: 10 }}>{copyright} </div>
        </Grid>
      </Grid>
    </footer>
  );
}
