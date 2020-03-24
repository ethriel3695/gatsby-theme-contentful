import React from 'react';
import { Typography } from '@material-ui/core';
import { usePageData } from '../../hooks/pageData';

const HeroLanding = ({ pageType }) => {
  const pages = usePageData();
  const page = pages.filter(p => {
    return p.pageType === pageType;
  });
  return (
    <div>
      {page.length > 0 && (
        <div>
          <div>
            {page[0].section.map((sect, index) => {
              return (
                <div key={index}>
                  {sect.image ? (
                    <img
                      key={`${index}-key`}
                      src={sect.image.fluid.src}
                      srcSet={sect.image.fluid.srcSet}
                      sizes={sect.image.fluid.sizes}
                      alt={sect.image.description}
                    />
                  ) : (
                    <Typography
                      component="h1"
                      variant="h2"
                      align="center"
                      color="inherit"
                      gutterBottom
                      style={{ padding: 20 }}
                    >
                      {page.title}
                    </Typography>
                  )}
                  <Typography
                    key={`${sect.title}`}
                    variant="h5"
                    align="center"
                    color="inherit"
                    paragraph
                  >
                    {sect.title}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroLanding;
