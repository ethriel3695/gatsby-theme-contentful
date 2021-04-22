import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitterSquare,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { useExternalLinks } from '../hooks/externalLinks';
import { useSiteMetadata } from '../hooks/siteMetadata';
import { useSocialInfo } from '../hooks/socialInfo';
// import { CallToAction } from '../components/Section/CallToAction';

export default function Footer() {
  const { copyright, hasCTA } = useSiteMetadata();
  const { email, facebook, twitter, github, instagram } = useSocialInfo();
  const links = useExternalLinks();
  // const section = useCTAData()[0];
  let social = [];
  let SocialContainer = null;
  if (facebook !== '') {
    social.push({ icon: faFacebook, link: facebook });
  }
  if (instagram !== '') {
    social.push({ icon: faInstagram, link: instagram });
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
      <div className="flex justify-center">
        <div className="flex text-center justify-between">
          {social.map((soc, index) => (
            <a
              key={index}
              href={`${soc.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={'m-4 text-primary no-underline text-3xl'}
            >
              <FontAwesomeIcon icon={soc.icon} className={'shadow-sm'} />
            </a>
          ))}
        </div>
      </div>
    );
  }
  return (
    <footer>
      <div>
        {/*hasCTA && <CallToAction section={section} />*/}
        {links.map((link, index) => (
          <div key={`container-${index}`} className="text-center">
            <a
              key={index}
              href={`${link.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className={'m-4 text-xl text-primary no-underline'}
            >
              {`${link.label}`}
            </a>
          </div>
        ))}
      </div>
      {SocialContainer}
      <div>
        <div>
          <div className="text-center p-5">{copyright} </div>
        </div>
      </div>
    </footer>
  );
}
